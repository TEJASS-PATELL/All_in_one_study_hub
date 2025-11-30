import express from "express";
import { getexamdata } from "../controllers/exam.controller.js";
import { getprivatejobdata } from "../controllers/privatejob.controller.js";

const router = express.Router();

router.get("/government-jobs", getexamdata);
router.get("/private-jobs", getprivatejobdata);

export default router;
