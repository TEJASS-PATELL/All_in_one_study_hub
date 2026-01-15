import { generateRoadmap } from "../services/geminiService.js";
import cacheClient from '../services/cacheClient.js';
import { prisma } from "../lib/prisma.js";
const ROADMAP_TTL = 3600;

export const getRoadmap = async (req, res) => {
  const userId = req.user.userid;
  const cacheKey = `roadmap:${userId}`;

  try {
    const cached = await cacheClient.get(cacheKey);

    if (cached === "NULL") {
      return res.status(404).json({ success: false });
    }

    if (cached) {
      return res.json({ success: true, roadmap: JSON.parse(cached) });
    }

    const roadmap = await prisma.roadmap.findUnique({where: { userId }});

    if (!roadmap) {
      await cacheClient.set(cacheKey, "NULL", "EX", 300);
      return res.status(404).json({ success: false });
    }

    await cacheClient.set(cacheKey, JSON.stringify(roadmap), "EX", ROADMAP_TTL);
    res.json({ success: true, roadmap });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

export const createorupdateRoadmap = async (req, res) => {
    const userId = req.user.userid;
    const cacheKey = `roadmap:${userId}`;

    try {
        const { jobType, jobRoles, education, skills, status, notes, roadmapDuration } = req.body;

        const aiRoadmap = await generateRoadmap({ jobType, jobRoles, education, skills, status, notes, roadmapDuration });

        const { title, steps } = aiRoadmap;

        const roadmap = await prisma.roadmap.upsert({
            where: { userId: req.user.userid },
            update: {
                title: title || `${jobType} Roadmap`,
                steps: steps || [],
            },
            create: {
                userId: req.user.userid,
                title: title || `${jobType} Roadmap`,
                steps: steps || [],
            },
        });

        await cacheClient.del(cacheKey);

        res.json({ success: true, roadmap });
    } catch (err) {
        console.error("Error creating/updating roadmap:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const removeroadmap = async (req, res) => {
    const userId = req.user.userid;
    const cacheKey = `roadmap:${userId}`;

    try {
        await prisma.roadmap.deleteMany({
            where: { userId: req.user.userid },
        });

        await cacheClient.del(cacheKey);

        res.json({
            success: true,
            message: "Roadmap deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error deleting roadmap",
        });
    }
};