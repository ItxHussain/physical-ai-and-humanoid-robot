import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import RagChatbot from './RagChatbot';
import './chatbot.css';

const FloatingButton = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      {!isChatbotOpen && (
        <button
          className="floating-chatbot-button"
          onClick={toggleChatbot}
          aria-label="Open AI Assistant"
        >
          <FaRobot />
          <span>AI Assistant</span>
        </button>
      )}

      <RagChatbot
        isOpen={isChatbotOpen}
        onClose={toggleChatbot}
      />
    </>
  );
};

export default FloatingButton;