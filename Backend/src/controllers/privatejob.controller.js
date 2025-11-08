const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getprivatejobdata = async (req, res) => {
    const {category} = req.query;
    try {
        const privatejob = await prisma.privateJob.findMany({
            where : {category}
        });
        res.json(privatejob);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch privatejob' });
    }
}

module.exports = { getprivatejobdata };