import express from "express";
import chatbot from "../controllers/chatbot.controller.js";
const router = express.Router();

router.post("/chatbot", chatbot);

export default router;
