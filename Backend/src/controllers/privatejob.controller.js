import { PrismaClient } from "@prisma/client";
import NodeCache from "node-cache";

const prisma = new PrismaClient();
const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

export const getprivatejobdata = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: "Category query parameter is required." });
  }

  const cacheKey = `privatejobs_${category}`;

  try {
    let privateJobs = myCache.get(cacheKey);
    if (privateJobs) {
      console.log(`Cache Hit for private jobs category: ${category}`);
      return res.json(privateJobs);
    }

    console.log(`Cache Miss. Fetching private jobs from DB for category: ${category}`);

    privateJobs = await prisma.privateJob.findMany({
      where: { category },
    });

    if (privateJobs && privateJobs.length > 0) {
      myCache.set(cacheKey, privateJobs);
    }

    return res.json(privateJobs);
  } catch (error) {
    console.error("Private Job Error:", error);
    return res.status(500).json({ error: "Failed to fetch private jobs" });
  }
};
