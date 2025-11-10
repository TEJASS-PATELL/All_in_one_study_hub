import React, { useState } from "react";
import { Bot, MessageSquare, X } from "lucide-react";
import { RiRobot2Fill, RiRobot3Fill, RiChatSmile3Fill } from "react-icons/ri";
import { useAiChatBot } from "../Store/useAiReply";
import ReactMarkdown from "react-markdown";
import "./ChatBot.css";
import { useAuthStore } from "../Store/useAuthStore";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { AIreply, isLoading } = useAiChatBot();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your Career Assistant — here to guide you through Government, Private, and IT job opportunities. What would you like to explore today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    console.log("gg")

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const reply = await AIreply(input, [...messages, userMsg]);
    
    if (reply) {
      console.log("gg")
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } else {
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong. Try again later." }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "25px", right: "25px" }}>
      {!isOpen ? (
        <button aria-label="Open AI Chatbot" className="ai-button" onClick={() => setIsOpen(true)}>
          <Bot className="chat-user-icon" draggable={false} />
        </button>
      ) : (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>AI-Assistant</span>
            <X size={20} onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }} />
          </div>

          <div className="chat-window">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                <ReactMarkdown>{isAuthenticated ? msg.text : "Please Login First"}</ReactMarkdown>
              </div>
            ))}
            {isLoading && <div className="message bot">Typing...</div>}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={input}
              placeholder="Ask me..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
