import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from 'dotenv';
import passport from "./config/passport.js";

import authRoutes from "./routes/auth.route.js";
import discussionRoutes from "./routes/discussion.route.js";
import examRoutes from "./routes/exam.route.js";
import roadmapRoutes from "./routes/roadmap.route.js";
import chatbotRoutes from "./routes/chatbot.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/discussion", discussionRoutes);
app.use("/api/exam", examRoutes);
app.use("/api/chat", chatbotRoutes);
app.use("/api/roadmap", roadmapRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
