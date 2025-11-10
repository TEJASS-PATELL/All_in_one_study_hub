import express from "express";
import { chatbot } from "../controllers/chatbot.controller";
const router = express.Router();

router.post("/chatbot", chatbot);

export default router;