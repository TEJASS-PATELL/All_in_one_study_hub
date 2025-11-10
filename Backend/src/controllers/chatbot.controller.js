import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not defined in .env file");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const chatbot = async (req, res) => {
    try {
        const { history = [], message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Invalid message" });
        }

        const safeHistory = history.filter((msg) => msg?.text && msg?.role).map((msg) => ({
            role: msg.role === "model" ? "model" : "user",
            parts: [{ text: msg.text }],
        }));

        if (safeHistory.length === 0 || safeHistory[0].role !== "user") {
            safeHistory.unshift({
                role: "user",
                parts: [{ text: message }],
            });
        }

        const chat = model.startChat({
            history: safeHistory,
            systemInstruction: {parts: [{ text: "You are a best" }]},
        });

        const result = await chat.sendMessage(message);
        const text =  result.response.text();

        res.status(200).json({ reply: text.trim() });
    } catch (error) {
        console.error("Gemini SDK Error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
