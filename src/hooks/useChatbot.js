import { useEffect } from 'react';
import FloatingButton from '../components/Chatbot/FloatingButton';
import '../components/Chatbot/chatbot.css';

// This hook adds the chatbot to the page
const useChatbot = () => {
  useEffect(() => {
    // Create a container for the chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    document.body.appendChild(chatbotContainer);

    // Render the floating button
    const renderChatbot = async () => {
      const React = await import('react');
      const ReactDOM = await import('react-dom/client');

      const root = ReactDOM.createRoot(chatbotContainer);
      root.render(React.createElement(FloatingButton));
    };

    renderChatbot();

    // Cleanup function
    return () => {
      if (chatbotContainer && chatbotContainer.parentNode) {
        chatbotContainer.parentNode.removeChild(chatbotContainer);
      }
    };
  }, []);
};

export default useChatbot;