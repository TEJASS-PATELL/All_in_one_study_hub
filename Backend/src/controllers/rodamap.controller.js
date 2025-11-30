import { PrismaClient } from "@prisma/client";
import { generateRoadmap } from "../services/geminiService.js";

const prisma = new PrismaClient();

export const getRoadmap = async (req, res) => {
  try {
    const roadmap = await prisma.roadmap.findUnique({
      where: { userId: req.user.userid },
    });

    if (!roadmap) {
      return res.status(404).json({ success: false, message: "No roadmap found" });
    }

    res.json({ success: true, roadmap });
  } catch (err) {
    console.error("Error fetching roadmap:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createorupdateRoadmap = async (req, res) => {
  try {
    const { jobType, jobRoles, education, skills, status, notes, roadmapDuration } = req.body;

    const aiRoadmap = await generateRoadmap({
      jobType,
      jobRoles,
      education,
      skills,
      status,
      notes,
      roadmapDuration,
    });

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

    res.json({ success: true, roadmap });
  } catch (err) {
    console.error("Error creating/updating roadmap:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const removeroadmap = async (req, res) => {
  try {
    const result = await prisma.roadmap.deleteMany({
      where: { userId: req.user.userid },
    });

    if (result.count === 0) {
      return res.status(404).json({
        success: false,
        message: "No roadmap found for this user",
      });
    }

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
