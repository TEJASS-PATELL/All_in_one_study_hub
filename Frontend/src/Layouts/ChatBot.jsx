import React, { useState, useRef, useEffect } from 'react';
import './AIBot.css';

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [typing, setTyping] = useState(false);
  const chatMessagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const openChat = () => {
    setChatOpen(true);
    if (!chatStarted) {
    } else {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const closeChat = () => {
    setChatOpen(false);
    setInputText('');
  };

  const startChat = () => {
    setChatStarted(true);
    addBotMessage("Hello! I'm your AI assistant. How can I help you today?");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const addBotMessage = (text) => {
    addMessage(text, 'bot');
  };

  const getAIResponse = (userText) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "That's interesting! Tell me more.",
          "I see. How can I assist you further?",
          "Thanks for sharing that.",
          "Could you please clarify?",
          "I'm here to help you with anything you need.",
          "Let's explore that topic together.",
          "Can you provide more details?",
          "I'm learning more every day!",
          "That's a great question!",
          "I'm happy to assist you with that."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        resolve(response);
      }, 1200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedText = inputText.trim();
    if (!trimmedText) return;
    addMessage(trimmedText, 'user');
    setInputText('');
    setTyping(true);

    const aiResponse = await getAIResponse(trimmedText);
    setTyping(false);
    addBotMessage(aiResponse);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && chatOpen) {
        closeChat();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [chatOpen]);

  return (
    <>
      <button
        aria-label="Open AI Chatbot"
        className={`chat-open-btn ${chatOpen ? 'close' : ''}`}
        onClick={openChat}
      >
        <img
          src="chatbot.png"
          alt="User Icon"
          title="Chat Bot"
          draggable={false}
          className="chat-user-icon"
        />
      </button>
      
      <aside className={`chat-panel ${chatOpen ? 'open' : ''}`} aria-hidden={!chatOpen}>
        <header className="chat-header">
          <h2 className="chat-title">AI Chatbot</h2>
          <button aria-label="Close AI Chatbot" className="chat-close-btn" onClick={closeChat}>
            <i className="fas fa-times fa-lg"></i>
          </button>
        </header>

        <main className="chat-content">
          {!chatStarted ? (
            <section className="welcome-screen">
              <img src="robot (1).png" alt="AI Robot Icon" className="welcome-image" draggable={false} />
              <h3 className="welcome-title">Welcome to AI Chatbot</h3>
              <p className="welcome-text">Start chatting with our AI assistant...</p>
              <button className="start-chat-btn" onClick={startChat}>OK</button>
            </section>
          ) : (
            <section className="chat-container">
              <div
                className="chat-messages"
                aria-live="polite"
                aria-relevant="additions"
                tabIndex={0}
                ref={chatMessagesRef}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`chat-message-wrapper ${msg.sender === 'user' ? 'user-wrapper' : 'bot-wrapper'}`}
                  >
                    <i className={`fas ${msg.sender === 'user' ? 'fa-user' : 'fa-robot'} message-icon`}></i>

                    <div className={`chat-message ${msg.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}


                {typing && (
                  <div className="chat-message chat-message-bot typing-indicator" aria-label="AI is typing">
                    <span className="typing-dot" style={{ animationDelay: '0s' }}></span>
                    <span className="typing-dot" style={{ animationDelay: '0.2s' }}></span>
                    <span className="typing-dot" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                )}
              </div>

              <form className="chat-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="chatInput"
                  aria-label="Message input"
                  placeholder="Type your message..."
                  required
                  autoComplete="off"
                  className="chat-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  ref={inputRef}
                  disabled={typing}
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="chat-send-btn"
                  disabled={typing}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </section>
          )}
        </main>
      </aside>
    </>
  );

};

export default ChatBot;
