import { GoogleGenerativeAI } from "@google/generative-ai";
import assistantAI from "../Prompt/assistantAI.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
});

export const chatbot = async (req, res) => {
  try {
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
