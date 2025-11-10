const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("./config/passport"); 

const app = express();
dotenv.config();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize()); 

const authRoutes = require("./routes/auth.route");
const discussionRoutes = require("./routes/discussion.route");
const examRoutes = require("./routes/exam.route");
const roadmapRoutes = require("./routes/roadmap.route");
const chatbotRoutes = require("./routes/chatbot.route");

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
