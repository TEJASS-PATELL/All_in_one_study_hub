import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { io } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import "./ChatRoom.css";

const rooms = {
  government: { title: "Government Sector", slug: "government" },
  private: { title: "Private Sector", slug: "private" },
  it: { title: "IT & Tech Sector", slug: "it" },
};

export default function ChatRoomPage() {
  const { room: roomSlug } = useParams();
  const navigate = useNavigate();
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [memberCount, setMemberCount] = useState(0);
  const [connectionState, setConnectionState] = useState("connecting");
  const [socketId, setSocketId] = useState("");
  const isDemo = useAuthStore((state) => state.isDemo);
  const activeRoom = useMemo(() => rooms[roomSlug], [roomSlug]);

  useEffect(() => {
    if (!activeRoom) {
      navigate("/dashboard/chatroom", { replace: true });
      return undefined;
    }

    if (isDemo) {
      setSocketId("offline-demo");
      setConnectionState("connected");
      setMemberCount(1);
      setMessages([{
        id: `demo-welcome-${activeRoom.slug}`,
        senderId: "community",
        sender: "Study Hub",
        text: `Welcome to the ${activeRoom.title} offline demo room. Messages stay in this browser session.`,
        createdAt: Date.now(),
      }]);
      return undefined;
    }

    const socket = io(import.meta.env.VITE_API_URL || window.location.origin, { transports: ["websocket", "polling"] });
    socketRef.current = socket;
    socket.on("connect", () => {
      setSocketId(socket.id);
      setConnectionState("connected");
      socket.emit("join-room", { room: activeRoom.slug });
    });
    socket.on("disconnect", () => setConnectionState("offline"));
    socket.on("connect_error", () => setConnectionState("offline"));
    socket.on("room-history", setMessages);
    socket.on("new-message", (message) => setMessages((current) => [...current, message].slice(-5)));
    socket.on("room-state", ({ members }) => setMemberCount(members));

    return () => {
      socket.emit("leave-room");
      socket.disconnect();
    };
  }, [activeRoom, isDemo, navigate]);

  const handleSend = (event) => {
    event.preventDefault();
    const text = messageText.trim();
    if (!text || connectionState !== "connected") return;
    if (isDemo) {
      setMessages((current) => [...current, {
        id: `demo-${Date.now()}`,
        senderId: "offline-demo",
        sender: "You",
        text,
        createdAt: Date.now(),
      }].slice(-20));
      setMessageText("");
      return;
    }

    socketRef.current?.emit("send-message", { text });
    setMessageText("");
  };

  if (!activeRoom) return null;

  return (
    <main className="chatroom-page">
      <div className="chat-page-topbar">
        <button className="chat-back-button" onClick={() => navigate("/dashboard/chatroom")}><FaArrowLeft /> All rooms</button>
        <span className="chat-page-status"><i className={connectionState} /> {connectionState}</span>
      </div>

      <section className="live-chat-panel chat-page-panel" aria-label={`${activeRoom.title} live chat`}>
        <header className="live-chat-header">
          <div>
            <span className="room-kicker">Live anonymous room</span>
            <h1>{activeRoom.title}</h1>
            <p><span className={`connection-dot ${connectionState}`} /> {memberCount} anonymous {memberCount === 1 ? "person" : "people"} here</p>
          </div>
          <button className="leave-button" onClick={() => navigate("/dashboard/chatroom")}>Leave room</button>
        </header>

        <div className="live-chat-messages chat-page-messages" aria-live="polite">
          {messages.length === 0 && <p className="chat-empty">You are in. Start the conversation.</p>}
          {messages.map((message) => {
            const messageSocketId = message.senderId || message.id?.split("-").slice(1).join("-");
            const isMine = String(messageSocketId) === String(socketId);
            return (
              <article className={`live-message ${isMine ? "message-mine" : "message-theirs"}`} key={message.id}>
                <div className="live-message-meta"><strong>{isMine ? "You" : "Anonymous"}</strong><span>{isMine ? "your message" : "anonymous"}</span></div>
                <p>{message.text}</p>
              </article>
            );
          })}
        </div>

        <form className="live-chat-form" onSubmit={handleSend}>
          <input value={messageText} onChange={(event) => setMessageText(event.target.value)} maxLength={500} placeholder={connectionState === "connected" ? "Write a message..." : "Connecting to room..."} disabled={connectionState !== "connected"} />
          <button type="submit" aria-label="Send message" disabled={!messageText.trim() || connectionState !== "connected"}><FaPaperPlane /></button>
        </form>
        <small className="chat-disclaimer">Anonymous session. Only the latest 5 messages are kept temporarily.</small>
      </section>
    </main>
  );
}
