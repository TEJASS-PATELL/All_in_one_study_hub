import cacheClient from "../services/cacheClient.js";
import { prisma } from "../lib/prisma.js";

const DISCUSSION_CACHE_KEY = 'all_discussions';
const CACHE_TTL = 3600;

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const warmUpDiscussionsSection = async () => {
  const cacheKey = DISCUSSION_CACHE_KEY;

  if (await cacheClient.get(cacheKey)) return;

  try {
    const discussions = await prisma.discussion.findMany({
      include: { user: { select: { id: true } } },
      orderBy: { createdAt: "desc" },
    });

    if (discussions?.length > 0) {
      await cacheClient.set(cacheKey, JSON.stringify(discussions), 'EX', CACHE_TTL);
    }
  } catch (error) {
    console.error('Cache warm-up error:', error.message);
  }
};

export const getDiscussions = async (req, res) => {
  const userId = req.user.userid;
  const lockKey = "discussion_lock";

  try {
    let discussions;
    let cached = await cacheClient.get(DISCUSSION_CACHE_KEY);

    if (cached) {
      discussions = JSON.parse(cached);
    } else {
      const lock = await cacheClient.set(lockKey, "1", "NX", "EX", 5);

      if (lock) {
        try {
          discussions = await prisma.discussion.findMany({
            include: { user: { select: { id: true } } },
            orderBy: { createdAt: "desc" },
          });
          await cacheClient.set(DISCUSSION_CACHE_KEY, JSON.stringify(discussions), "EX", CACHE_TTL);
        } finally {
          await cacheClient.del(lockKey);
        }
      } else {
        await wait(100);
        const retryCache = await cacheClient.get(DISCUSSION_CACHE_KEY);
        discussions = retryCache ? JSON.parse(retryCache) : await prisma.discussion.findMany({
          include: { user: { select: { id: true } } },
          orderBy: { createdAt: "desc" },
        });
      }
    }

    const sorted = discussions.sort((a, b) => {
      if (a.userId === userId && b.userId !== userId) return -1;
      if (a.userId !== userId && b.userId === userId) return 1;
      return 0;
    });

    res.status(200).json({ success: true, data: sorted });
  } catch (err) {
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

  if (!name || !location || !category || !qualification || !examGiven || !examCracked || !advice || !description) {
    return res.status(400).json({ success: false, message: "Required fields missing." });
  }

  try {
    const existing = await prisma.discussion.findFirst({ where: { userId } });
    if (existing) return res.status(409).json({ success: false, message: "Already posted." });

    const newDiscussion = await prisma.discussion.create({
      data: {
        userId, name, location, category, qualification,
        examGiven, examCracked, advice, description,
        email: email || null,
        jobRole: jobRole || null,
        company: company || null,
        department: department || null,
        salaryPackage: salaryPackage || null
      },
    });

    await cacheClient.del(DISCUSSION_CACHE_KEY);
    res.status(201).json({ success: true, data: newDiscussion });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating discussion." });
  }
};

export const deleteDiscussion = async (req, res) => {
  const discussionId = parseInt(req.params.id);
  const userId = req.user.userid;

  if (isNaN(discussionId)) return res.status(400).json({ success: false, message: "Invalid ID." });

  try {
    const discussion = await prisma.discussion.findUnique({ where: { id: discussionId } });
    if (!discussion) return res.status(404).json({ success: false, message: "Not found." });
    if (discussion.userId !== userId) return res.status(403).json({ success: false, message: "Unauthorized." });

    await prisma.discussion.delete({ where: { id: discussionId } });
    await cacheClient.del(DISCUSSION_CACHE_KEY);

    res.status(200).json({ success: true, message: "Deleted successfully." });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting." });
  }
};