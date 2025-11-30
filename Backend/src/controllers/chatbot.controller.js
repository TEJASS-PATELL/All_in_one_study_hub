import { GoogleGenerativeAI } from "@google/generative-ai";
import assistantAI from "../Prompt/assistantAI.js";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not defined in .env file");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const chatbot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Invalid message" });
    }

    const chat = model.startChat({
      systemInstruction: { parts: [{ text: assistantAI }] },
      history: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    res.status(200).json({ reply: text.trim() });
  } catch (error) {
    console.error("Gemini SDK Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default chatbot;
