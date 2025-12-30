import cacheClient from '../services/cacheClient.js';
const THREE_HOURS_IN_SECONDS = 3 * 3600;
import { prisma } from "../lib/prisma.js";

const values = ['Engineering', 'Medical', 'Civil Services', 'Law Exams', 'Banking & Finance', 'Defense Exams', 'Railway Exams', 'Teaching & Education'];

export const warmUpGovernmentSection = async () => {
    for (const category of values) {
        const cacheKey = `exams_${category}`;

        if (await cacheClient.get(cacheKey)) continue;

        try {
            const exams = await prisma.exam.findMany({where: { category }});

            if (exams && exams.length > 0) {
                await cacheClient.set(cacheKey, JSON.stringify(exams), 'EX', THREE_HOURS_IN_SECONDS);
            } else {
                console.log(`No exams found for warm-up category: ${category}`);
            }
        } catch (error) {
            console.error(`Error during cache warm-up for ${category}:`, error.message);
        }
    }
};

export const getexamdata = async (req, res) => {
    const { category } = req.params;
    if (!category) {
        return res.status(400).json({ error: 'Category path parameter is required.' });
    }

    const cacheKey = `exams_${category}`;

    try {
        let examsJSON = await cacheClient.get(cacheKey);

        if (examsJSON) {
            return res.json(JSON.parse(examsJSON));
        }

        let exams = await prisma.exam.findMany({
            where: { category },
        });

        if (exams && exams.length > 0) {
            await cacheClient.set(cacheKey, JSON.stringify(exams), 'EX', THREE_HOURS_IN_SECONDS);
        }

        return res.json(exams);
    } catch (error) {
        console.error('Database or Caching Error:', error);
        return res.status(500).json({ error: 'Failed to fetch exams' });
    }
};