import { GoogleGenerativeAI } from "@google/generative-ai";
import assistantAI from "../Prompt/assistantAI.js";

export const chatbot = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ error: "AI assistant is not configured." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Invalid message" });
    }

    const contents = [
      {
        role: "user",
        parts: [{ text: assistantAI }],
      },
      ...history.map((item) => ({
        role: item.role,
        parts: [{ text: item.text }],
      })),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const result = await model.generateContent({ contents });
    const reply = result.response.text().trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
