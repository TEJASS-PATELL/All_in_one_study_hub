import { PrismaClient } from "@prisma/client";
import NodeCache from "node-cache";

const THREE_HOURS_IN_SECONDS = 3 * 3600;
const prisma = new PrismaClient();
const myCache = new NodeCache({ stdTTL: THREE_HOURS_IN_SECONDS, checkperiod: 120 });

const WARMUP_PRIVATE_JOB_CATEGORIES = ['Core Engineering', 'Sales & Marketing', 'Finance & Accounting', 'Customer Support', 'Human Resources', 'Design & Multimedia'];

export const warmUpPrivateJobsCache = async () => {
  console.log('--- Starting Private Jobs Cache Warm-up ---');
  for (const category of WARMUP_PRIVATE_JOB_CATEGORIES) {
    const cacheKey = `privatejobs_${category}`;

    if (myCache.get(cacheKey)) {
      console.log(`Private Jobs Cache already warm for: ${category}`);
      continue;
    }

    try {
      const privateJobs = await prisma.privateJob.findMany({
        where: { category },
      });

      if (privateJobs && privateJobs.length > 0) {
        myCache.set(cacheKey, privateJobs);
        console.log(`Successfully warmed up private jobs cache for: ${category}`);
      }
    } catch (error) {
      console.error(`Error during private job cache warm-up for ${category}:`, error.message);
    }
  }
  console.log('--- Private Jobs Cache Warm-up Complete ---');
};

export const getprivatejobdata = async (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ error: "Category path parameter is required." });
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
