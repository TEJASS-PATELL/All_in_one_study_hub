const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getexamdata = async (req, res) => {
    const {category} = req.query;
    try {
        const exams = await prisma.exam.findMany({
            where : {category}
        });
        res.json(exams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch exams' });
    }
}

module.exports = { getexamdata };