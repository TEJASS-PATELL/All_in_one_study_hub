const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { getexamdata } = require("../controllers/exam.controller");
const { getprivatejobdata } = require("../controllers/privatejob.controller");
const authentication = require("../middlewares/auth.middleware");
const prisma = new PrismaClient();

router.get("/government-jobs", getexamdata);
router.get("/private-jobs", getprivatejobdata);

module.exports = router;