const express = require("express");
const router = express.Router();
const { getexamdata } = require("../controllers/exam.controller");
const { getprivatejobdata } = require("../controllers/privatejob.controller");

router.get("/government-jobs", getexamdata);
router.get("/private-jobs", getprivatejobdata);

module.exports = router;