import { PrismaClient } from "@prisma/client";
import cacheClient from "../services/cacheClient.js";
const prisma = new PrismaClient();

const DISCUSSION_CACHE_KEY = 'all_discussions';
const CACHE_TTL = 3600;

export const warmUpDiscussionsCache = async () => {
  console.log('--- Starting Discussion Cache Warm-up ---');
  const cacheKey = DISCUSSION_CACHE_KEY;

  if (await cacheClient.get(cacheKey)) {
    console.log(`Discussion cache already warm.`);
    return;
  }

  try {
    const discussions = await prisma.discussion.findMany({
      include: {
        user: true,
        likes: true,
      },
      orderBy: { createdAt: "desc" },
    });

    if (discussions && discussions.length > 0) {
      await cacheClient.set(cacheKey, JSON.stringify(discussions), 'EX', CACHE_TTL);
      console.log(`Successfully warmed up discussion cache. Total items: ${discussions.length}`);
    } else {
      console.log(`No discussions found for warm-up.`);
    }
  } catch (error) {
    console.error('Error during discussion cache warm-up:', error.message);
  }
};

export const getDiscussions = async (req, res) => {
  const userId = req.user.userid;

  try {
    let discussions;
    let discussionsJSON = await cacheClient.get(DISCUSSION_CACHE_KEY);

    if (discussionsJSON) {
      discussions = JSON.parse(discussionsJSON);
    } else {
      discussions = await prisma.discussion.findMany({
        include: {
          user: true,
          likes: true,
        },
        orderBy: { createdAt: "desc" },
      });

      if (discussions && discussions.length > 0) {
        await cacheClient.set(DISCUSSION_CACHE_KEY, JSON.stringify(discussions), 'EX', CACHE_TTL);
      }
    }

    const sorted = [
      ...discussions.filter((d) => d.userId === userId),
      ...discussions.filter((d) => d.userId !== userId),
    ];

    res.status(200).json({ success: true, data: sorted });
  } catch (err) {
    console.error("Error fetching discussions:", err);
    res.status(500).json({ success: false, message: "Server error fetching discussions." });
  }
};

export const createDiscussion = async (req, res) => {
  const userId = req.user.userid;
  const {
    name, location, category, qualification,
    examGiven, examCracked, advice, description,
    email, jobRole, company, department, salaryPackage,
  } = req.body;

  if (!name || !location || !category || !qualification ||
    !examGiven || !examCracked || !advice || !description) {
    return res.status(400).json({ success: false, message: "All required fields must be filled." });
  }

  try {
    const existing = await prisma.discussion.findFirst({ where: { userId } });

    if (existing) {
      return res.status(400).json({ success: false, message: "You have already shared a discussion." });
    }

    const newDiscussion = await prisma.discussion.create({
      data: {
        userId,
        name,
        location,
        category,
        qualification,
        examGiven,
        examCracked,
        advice,
        description,
        email: email || null,
        jobRole: jobRole || null,
        company: company || null,
        department: department || null,
        salaryPackage: salaryPackage || null,
      },
    });

    await cacheClient.del(DISCUSSION_CACHE_KEY);

    res.status(201).json({ success: true, data: newDiscussion });
  } catch (err) {
    console.error("Error creating discussion:", err);
    res.status(500).json({ success: false, message: "Server error creating discussion." });
  }
};

export const deleteDiscussion = async (req, res) => {
  const discussionId = parseInt(req.params.id);
  const userId = req.user.userid;

  if (isNaN(discussionId)) {
    return res.status(400).json({ success: false, message: "Invalid discussion ID." });
  }

  try {
    const discussion = await prisma.discussion.findUnique({ where: { id: discussionId } });

    if (!discussion) {
      return res.status(404).json({ success: false, message: "Discussion not found." });
    }

    if (discussion.userId !== userId) {
      return res.status(403).json({ success: false, message: "You are not allowed to delete this discussion." });
    }

    await prisma.discussion.delete({ where: { id: discussionId } });

    await cacheClient.del(DISCUSSION_CACHE_KEY);

    res.status(200).json({ success: true, message: "Discussion deleted successfully." });
  } catch (err) {
    console.error("Error deleting discussion:", err);
    res.status(500).json({ success: false, message: "Server error deleting discussion." });
  }
};

export const likeDiscussion = async (req, res) => {
  const discussionId = parseInt(req.params.id);
  const userId = req.user.userid;

  if (isNaN(discussionId)) {
    return res.status(400).json({ success: false, message: "Invalid discussion ID." });
  }

  try {
    const alreadyLiked = await prisma.like.findUnique({
      where: {
        userId_discussionId: { userId, discussionId },
      },
    });

    if (alreadyLiked) {
      return res.status(400).json({ success: false, message: "You have already liked this discussion." });
    }

    await prisma.like.create({ data: { userId, discussionId } });

    await prisma.discussion.update({
      where: { id: discussionId },
      data: { likesCount: { increment: 1 } },
    });

    await cacheClient.del(DISCUSSION_CACHE_KEY);

    res.status(200).json({ success: true, message: "Liked successfully." });
  } catch (err) {
    console.error("Error liking discussion:", err);
    res.status(500).json({ success: false, message: "Server error liking discussion." });
  }
};