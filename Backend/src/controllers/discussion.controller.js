import { PrismaClient } from "@prisma/client";
import cacheClient from "../services/cacheClient.js";

const prisma = new PrismaClient();

const DISCUSSION_CACHE_KEY = 'all_discussions';
const CACHE_TTL = 3600;

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const warmUpDiscussionsCache = async () => {
  const cacheKey = DISCUSSION_CACHE_KEY;

  if (await cacheClient.get(cacheKey)) {
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
    let cached = await cacheClient.get(DISCUSSION_CACHE_KEY);

    if (cached && cached.length > 5 && cached !== "[]") {
      discussions = JSON.parse(cached);
    } else {
      const lockKey = "discussion_cache_lock";
      const lock = await cacheClient.set(lockKey, "locked", "NX", "EX", 10);

      if (lock) {
        try {
          discussions = await prisma.discussion.findMany({
            include: { user: { select: { id: true } } },
            orderBy: { createdAt: "desc" },
          });

          await cacheClient.set(
            DISCUSSION_CACHE_KEY,
            JSON.stringify(discussions),
            "EX",
            CACHE_TTL
          );
        } finally {
          await cacheClient.del(lockKey);
        }
      } else {
        await wait(100);

        let retryCache = await cacheClient.get(DISCUSSION_CACHE_KEY);
        discussions = retryCache ? JSON.parse(retryCache) : await prisma.discussion.findMany({
              include: { user: { select: { id: true } } },
              orderBy: { createdAt: "desc" },
            });
      }
    }

    const sorted = [
      ...discussions.filter((d) => d.userId === userId),
      ...discussions.filter((d) => d.userId !== userId),
    ];

    res.status(200).json({ success: true, data: sorted });
  } catch (err) {
    console.error("Get discussions error:", err);
    res.status(500).json({ success: false, message: "Server error." });
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
  const discussionId = Number(req.params.id);
  const userId = req.user.userid;

  if (isNaN(discussionId)) {
    return res.status(400).json({ success: false, message: "Invalid discussion ID." });
  }

  try {
    const existingLike = await prisma.like.findUnique({
      where: { userId_discussionId: { userId, discussionId } },
    });

    let updated;

    if (existingLike) {
      updated = await prisma.$transaction([
        prisma.like.delete({
          where: { userId_discussionId: { userId, discussionId } },
        }),
        prisma.discussion.update({
          where: { id: discussionId },
          data: { likesCount: { decrement: 1 } },
          select: { id: true, likesCount: true },
        }),
      ]);

      await cacheClient.del(DISCUSSION_CACHE_KEY);

      return res.status(200).json({
        success: true,
        action: "unliked",
        updatedLikes: updated[1].likesCount,
      });
    }

    updated = await prisma.$transaction([
      prisma.like.create({ data: { userId, discussionId } }),
      prisma.discussion.update({
        where: { id: discussionId },
        data: { likesCount: { increment: 1 } },
        select: { id: true, likesCount: true },
      }),
    ]);

    await cacheClient.del(DISCUSSION_CACHE_KEY);

    return res.status(200).json({
      success: true,
      action: "liked",
      updatedLikes: updated[1].likesCount,
    });
  } catch (err) {
    console.error("Toggle like error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const getUserLikedDiscussions = async (req, res) => {
  const userId = req.user.userid;

  try {
    const likes = await prisma.like.findMany({
      where: { userId },
      select: { discussionId: true },
    });

    const likedIds = likes.map(l => l.discussionId);

    res.status(200).json({ success: true, data: likedIds });
  } catch (err) {
    console.error("User likes fetch error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
