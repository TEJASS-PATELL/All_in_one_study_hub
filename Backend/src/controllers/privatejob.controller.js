import { PrismaClient } from "@prisma/client"; 
import cacheClient from "../services/cacheClient.js";
const THREE_HOURS_IN_SECONDS = 3 * 3600;
const prisma = new PrismaClient();

const values = ['Core Engineering', 'Sales & Marketing', 'Finance & Accounting', 'Customer Support', 'Human Resources', 'Design & Multimedia'];

export const warmUpPrivateJobsCache = async () => {
    for (const category of values) {
        const cacheKey = `privatejobs_${category}`;

        if (await cacheClient.get(cacheKey)) { 
            continue;
        }

        try {
            const privateJobs = await prisma.privateJob.findMany({ where: { category } });

            if (privateJobs && privateJobs.length > 0) {
                await cacheClient.set(cacheKey, JSON.stringify(privateJobs), 'EX', THREE_HOURS_IN_SECONDS);
            }
        } catch (error) {
            console.error(`Error during private job cache warm-up for ${category}:`, error.message);
        }
    }
};

export const getprivatejobdata = async (req, res) => {
    const { category } = req.params;

    if (!category) {
        return res.status(400).json({ error: "Category path parameter is required." });
    }

    const cacheKey = `privatejobs_${category}`;

    try {
        let privateJobsJSON = await cacheClient.get(cacheKey); 
        
        if (privateJobsJSON) {
            return res.json(JSON.parse(privateJobsJSON)); 
        }

        let privateJobs = await prisma.privateJob.findMany({ where: { category } });

        if (privateJobs && privateJobs.length > 0) {
            await cacheClient.set(cacheKey, JSON.stringify(privateJobs), 'EX', THREE_HOURS_IN_SECONDS);
        }

        return res.json(privateJobs);
    } catch (error) {
        console.error("Private Job Error:", error);
        return res.status(500).json({ error: "Failed to fetch private jobs" });
    }
};
