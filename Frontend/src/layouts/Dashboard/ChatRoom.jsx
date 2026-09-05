import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { io } from 'socket.io-client';
import './ChatRoom.css';

const ChatRoom = () => {
  const socketRef = useRef(null);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [memberCount, setMemberCount] = useState(0);
  const [connectionState, setConnectionState] = useState('connecting');

  const rooms = [
    {
      id: 1,
      slug: "government",
      title: "Government Sector",
      desc: "Discuss Govt exams, UPSC, Judiciary, and latest notifications. Connect with aspirants to share study resources and strategy together. Grow your knowledge base daily.",
      members: "0 Online"
    },
    {
      id: 2,
      slug: "private",
      title: "Private Sector",
      desc: "Corporate life, Private Law firms, and placement discussions. Get insights on work culture and professional growth from experts instantly. Build your network globally.",
      members: "0 Online"
    },
    {
      id: 3,
      slug: "it",
      title: "IT & Tech Sector",
      desc: "Coding, AI interviews, and tech trends in the industry. Engage with developers to solve complex bugs and discuss new frameworks efficiently. Learn latest tech skills weekly.",
      members: "0 Online"
    }
  ];

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL || window.location.origin, {
      transports: ['websocket', 'polling'],
    });
    socketRef.current = socket;
    socket.on('connect', () => setConnectionState('connected'));
    socket.on('disconnect', () => setConnectionState('offline'));
    socket.on('connect_error', () => setConnectionState('offline'));
    socket.on('room-history', setMessages);
    socket.on('new-message', (message) => setMessages((current) => [...current, message].slice(-5)));
    socket.on('room-state', ({ members }) => setMemberCount(members));

    return () => {
      socket.emit('leave-room');
      socket.disconnect();
    };
  }, []);

  const handleJoin = (room) => {
    setActiveRoom(room);
    setMessages([]);
    setMessageText('');
    socketRef.current?.emit('join-room', { room: room.slug });
  };

  const handleLeave = () => {
    socketRef.current?.emit('leave-room');
    setActiveRoom(null);
    setMessages([]);
    setMessageText('');
    setMemberCount(0);
  };

  const handleSend = (event) => {
    event.preventDefault();
    const text = messageText.trim();
    if (!text || !activeRoom || connectionState !== 'connected') return;
    socketRef.current?.emit('send-message', { text });
    setMessageText('');
  };

  return (
    <div className="chatroom-wrapper">
      <div className="chatroom-header">
        <div>
          <span className="chatroom-kicker">Community spaces</span>
          <h1>Find your <em>people.</em></h1>
          <p className="chatroom-description">
            Join focused rooms for advice, preparation and conversations with people on the same path.
          </p>
        </div>
        <div className="chatroom-intro">
          <span className="room-count">03 spaces open</span>
          <strong>Pick a room, ask better questions, and keep moving forward.</strong>
        </div>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-card-top">
              <span className="room-index">0{room.id}</span>
            </div>
            <span className="room-kicker">Sector community</span>
            <h2>{room.title}</h2>
            <p>{room.desc}</p>

            <div className="room-footer">
              <div className="room-status">
                <span className="dot"></span> {room.members}
              </div>
              <button
                className="join-button"
                onClick={() => handleJoin(room)}>
                {activeRoom?.slug === room.slug ? 'Joined' : 'Join Now'} <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeRoom && (
        <section className="live-chat-panel" aria-label={`${activeRoom.title} live chat`}>
          <div className="live-chat-header">
            <div>
              <span className="room-kicker">Live room</span>
              <h2>{activeRoom.title}</h2>
              <p><span className={`connection-dot ${connectionState}`} /> {memberCount} anonymous {memberCount === 1 ? 'person' : 'people'} here</p>
            </div>
            <button className="leave-button" onClick={handleLeave}>Leave room</button>
          </div>

          <div className="live-chat-messages" aria-live="polite">
            {messages.length === 0 && <p className="chat-empty">You are in. Start the conversation.</p>}
            {messages.map((message) => (
              <article className="live-message" key={message.id}>
                <div className="live-message-meta"><strong>{message.sender}</strong><span>anonymous</span></div>
                <p>{message.text}</p>
              </article>
            ))}
          </div>

          <form className="live-chat-form" onSubmit={handleSend}>
            <input value={messageText} onChange={(event) => setMessageText(event.target.value)} maxLength={500} placeholder={connectionState === 'connected' ? 'Write a message...' : 'Connecting to room...'} disabled={connectionState !== 'connected'} />
            <button type="submit" disabled={!messageText.trim() || connectionState !== 'connected'}>Send</button>
          </form>
          <small className="chat-disclaimer">Anonymous session. Only the latest 5 messages are kept temporarily.</small>
        </section>
      )}

      <div className="privacy-note">
        <h3>Room Policy & Privacy</h3>
        <p>This is a <b>Real-Time Live Chat</b> experience. To ensure your privacy:</p>
        <ul>
          <li>Messages are <b>temporary</b> and will not be saved in our database.</li>
          <li>Once you refresh or leave the room, older messages will vanish.</li>
          <li>Everyone participates <b>anonymously</b> - no personal profiles are linked to chats.</li>
          <li>Only a limited number of recent messages are visible to keep the conversation fresh.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatRoom;