import { PrismaClient } from "@prisma/client";
import cacheClient from "../services/cacheClient.js";

const prisma = new PrismaClient();

const DISCUSSION_CACHE_KEY = 'all_discussions';
const CACHE_TTL = 3600;
const PAGE_LIMIT = 20;

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const warmUpDiscussionsCache = async () => {
  console.log('--- Discussion Cache Warm-up started ---');
  const cacheKey = DISCUSSION_CACHE_KEY;

  if (await cacheClient.get(cacheKey)) {
    console.log(`Discussion cache already warm.`);
    return;
  }

  try {
    const discussions = await prisma.discussion.findMany({
      include: {
        user: {
          select: { id: true },
        },
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

    if (!discussionsJSON || discussionsJSON === "[]" || discussionsJSON.length < 5) {
      discussionsJSON = null;
    }

    if (discussionsJSON) {
      discussions = JSON.parse(discussionsJSON);
    } else {
      const lockKey = 'discussion_cache_lock';
      const lockAcquired = await cacheClient.set(lockKey, 'locked', { NX: true, EX: 10 });

      if (lockAcquired) {
        try {
          discussions = await prisma.discussion.findMany({
            include: {
              user: { select: { id: true } },
            },
            orderBy: { createdAt: "desc" },
          });

          if (discussions && discussions.length > 0) {
            await cacheClient.set(DISCUSSION_CACHE_KEY, JSON.stringify(discussions), 'EX', CACHE_TTL);
          }
        } catch (error) {
          console.error("DB error during lock holder fetch:", error);
        } finally {
          await cacheClient.del(lockKey);
        }
      } else {
        await wait(100);
        discussionsJSON = await cacheClient.get(DISCUSSION_CACHE_KEY);

        if (discussionsJSON) {
          discussions = JSON.parse(discussionsJSON);
        } else {
          discussions = await prisma.discussion.findMany({
            include: { user: { select: { id: true } } },
            orderBy: { createdAt: "desc" },
          });
        }
      }
    }

    const sorted = [
      ...discussions.filter((d) => d.userId === userId),
      ...discussions.filter((d) => d.userId !== userId),
    ];

    res.status(200).json({
      success: true,
      data: sorted
    });

  } catch (err) {
    console.error("Error fetching discussions:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const getUserLikedDiscussions = async (req, res) => {
  const discussionId = parseInt(req.params.id);
  const userId = req.user.userid;

  if (isNaN(discussionId)) {
    return res.status(400).json({ success: false, message: "Invalid discussion ID." });
  }

  try {
    const alreadyLiked = await prisma.like.findUnique({
      where: { userId_discussionId: { userId, discussionId } },
    });

    if (alreadyLiked) {
      return res.status(400).json({ success: false, message: "You have already liked this discussion." });
    }

    const updatedDiscussion = await prisma.$transaction(async (tx) => {
      await tx.like.create({ data: { userId, discussionId } });

      return await tx.discussion.update({
        where: { id: discussionId },
        data: { likesCount: { increment: 1 } },
        select: { id: true, likesCount: true },
      });
    });

    try {
      await cacheClient.del(DISCUSSION_CACHE_KEY);
    } catch (err) {
      setTimeout(() => cacheClient.del(DISCUSSION_CACHE_KEY), 200);
    }

    res.status(200).json({
      success: true,
      message: "Liked successfully.",
      updatedLikes: updatedDiscussion.likesCount,
    });
  } catch (err) {
    console.error("Error liking discussion:", err);
    res.status(500).json({ success: false, message: "Server error liking discussion." });
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
      return res.status(409).json({ success: false, message: "You have already shared a discussion." });
    }

    const newDiscussion = await prisma.discussion.create({
      data: {
        userId,
        name, location, category, qualification,
        examGiven, examCracked, advice, description,
        email: email || null,
        jobRole: jobRole || null,
        company: company || null,
        department: department || null,
        salaryPackage: salaryPackage || null,
        likesCount: 0,
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
      where: { userId_discussionId: { userId, discussionId } },
    });

    if (alreadyLiked) {
      return res.status(400).json({ success: false, message: "You have already liked this discussion." });
    }

    await prisma.$transaction([
      prisma.like.create({ data: { userId, discussionId } }),
      prisma.discussion.update({
        where: { id: discussionId },
        data: { likesCount: { increment: 1 } },
      }),
    ]);

    await cacheClient.del(DISCUSSION_CACHE_KEY);

    res.status(200).json({ success: true, message: "Liked successfully." });
  } catch (err) {
    console.error("Error liking discussion:", err);
    res.status(500).json({ success: false, message: "Server error liking discussion." });
  }
};
