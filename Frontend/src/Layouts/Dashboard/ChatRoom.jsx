import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ChatRoom.css';

const ChatRoom = () => {
  const rooms = [
    {
      id: 1,
      title: "Government Sector",
      desc: "Discuss Govt exams, UPSC, Judiciary, and latest notifications. Connect with aspirants to share study resources and strategy together. Grow your knowledge base daily.",
      members: "0 Online"
    },
    {
      id: 2,
      title: "Private Sector",
      desc: "Corporate life, Private Law firms, and placement discussions. Get insights on work culture and professional growth from experts instantly. Build your network globally.",
      members: "0 Online"
    },
    {
      id: 3,
      title: "IT & Tech Sector",
      desc: "Coding, AI interviews, and tech trends in the industry. Engage with developers to solve complex bugs and discuss new frameworks efficiently. Learn latest tech skills weekly.",
      members: "0 Online"
    }
  ];

  const handleJoin = (roomName) => {
    alert(`${roomName} Chat Room coming soon!`);
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
                onClick={() => handleJoin(room.title)}>
                Join Now <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

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