import express from "express";
import authentication from "../middlewares/auth.middleware.js";
import { evaluateInterviewAnswers, generateInterviewQuestions } from "../controllers/interview.controller.js";

const router = express.Router();

router.post("/questions", authentication, generateInterviewQuestions);
router.post("/evaluate", authentication, evaluateInterviewAnswers);

export default router;
