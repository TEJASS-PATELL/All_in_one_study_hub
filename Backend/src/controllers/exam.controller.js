import { PrismaClient } from '@prisma/client';
import NodeCache from 'node-cache';

const prisma = new PrismaClient();
const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 120 }); 

const getexamdata = async (req, res) => {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ error: 'Category query parameter is required.' });
  }

  const cacheKey = `exams_${category}`;

  try {
    let exams = myCache.get(cacheKey);
    if (exams) {
      console.log(`Cache Hit for category: ${category}`);
      return res.json(exams);
    }

    console.log(`Cache Miss. Fetching from DB for category: ${category}`);

    exams = await prisma.exam.findMany({
      where: { category },
    });

    if (exams && exams.length > 0) {
      myCache.set(cacheKey, exams);
    }

    return res.json(exams);
  } catch (error) {
    console.error('Database or Caching Error:', error);
    return res.status(500).json({ error: 'Failed to fetch exams' });
  }
};

export { getexamdata };
