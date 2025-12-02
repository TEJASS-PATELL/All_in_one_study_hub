import { PrismaClient } from '@prisma/client';
import cacheClient from '../services/cacheClient';
const THREE_HOURS_IN_SECONDS = 3 * 3600;
const prisma = new PrismaClient();

const WARMUP_CATEGORIES = ['Engineering', 'Medical', 'Civil Services', 'Law Exams', 'Banking & Finance', 'Defense Exams', 'Railway Exams', 'Teaching & Education'];

export const warmUpCache = async () => {
    console.log('--- Starting Cache Warm-up ---');
    for (const category of WARMUP_CATEGORIES) {
        const cacheKey = `exams_${category}`;

        if (await cacheClient.get(cacheKey)) {
            console.log(`Cache already warm for: ${category}`);
            continue;
        }

        try {
            const exams = await prisma.exam.findMany({
                where: { category },
            });

            if (exams && exams.length > 0) {
                await cacheClient.set(cacheKey, JSON.stringify(exams), 'EX', THREE_HOURS_IN_SECONDS);
                console.log(`Successfully warmed up cache for: ${category}`);
            } else {
                console.log(`No exams found for warm-up category: ${category}`);
            }
        } catch (error) {
            console.error(`Error during cache warm-up for ${category}:`, error.message);
        }
    }
    console.log('--- Cache Warm-up Complete ---');
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
            console.log(`Cache Hit for category: ${category}`);
            return res.json(JSON.parse(examsJSON));
        }

        console.log(`Cache Miss. Fetching from DB for category: ${category}`);

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