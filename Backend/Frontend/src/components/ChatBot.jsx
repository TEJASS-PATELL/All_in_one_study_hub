import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useAiChatBot } from "../stores/useAIchatbot";
import ReactMarkdown from "react-markdown";
import "../style/ChatBot.css";
import { useAuthStore } from "../stores/useAuth";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { AIreply, isLoading } = useAiChatBot();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi....." },           //! Change according to your chatBot
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const reply = await AIreply(input, [...messages, userMsg]);
    if (reply) {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } else {
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong. Try again later." }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "25px", right: "25px" }}>
      {!isOpen ? (
        <button className="chat-launch-btn" onClick={() => setIsOpen(true)}>
          <MessageCircle size={20} />
          Open Chatbot
        </button>
      ) : (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>ChatBot</span>
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
              placeholder="Ask me about DSA..."
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
