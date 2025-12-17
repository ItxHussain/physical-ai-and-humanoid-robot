import React, { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import RagService from './RagService';

const RagChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your Physical AI & Humanoid Robot assistant. Ask me anything about the book content!', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to get RAG response using our service
  const getRagResponse = async (query) => {
    try {
      // Initialize the RAG service if not already done
      if (!RagService.isInitialized) {
        await RagService.initialize();
      }

      // Query the RAG system
      const result = await RagService.query(query);

      // Add source information to the response
      let responseText = result.response;

      if (result.sources && result.sources.length > 0) {
        responseText += '\n\nSources: ' + result.sources.map(source => source.title).join(', ');
      }

      return responseText;
    } catch (error) {
      console.error('Error getting RAG response:', error);
      return 'Sorry, I encountered an error processing your request. Please try again.';
    }
  };

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Get bot response
      const botResponse = await getRagResponse(inputText);

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error processing your request.',
        sender: 'bot'
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="rag-chatbot-overlay">
          <div className="rag-chatbot-container">
            {/* Chat Header */}
            <div className="rag-chatbot-header">
              <div className="rag-chatbot-title">
                <FaRobot className="chatbot-icon" />
                <span>Physical AI Assistant</span>
              </div>
              <button className="rag-chatbot-close" onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="rag-chatbot-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`rag-chatbot-message ${message.sender}-message`}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                  <div className="message-sender">
                    {message.sender === 'bot' ? 'Assistant' : 'You'}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="rag-chatbot-message bot-message">
                  <div className="message-content">
                    <FaSpinner className="spinner-icon" />
                    Thinking...
                  </div>
                  <div className="message-sender">Assistant</div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="rag-chatbot-input-area">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Physical AI, ROS 2, Digital Twins, NVIDIA Isaac, or VLA..."
                className="rag-chatbot-input"
                rows="2"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="rag-chatbot-send-button"
              >
                {isLoading ? <FaSpinner className="spinner-icon" /> : <FaPaperPlane />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RagChatbot;