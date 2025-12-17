import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import GlobalChatbot from '../components/Chatbot/GlobalChatbot';

if (ExecutionEnvironment.canUseDOM) {
  // Check if container already exists to avoid duplicates
  let chatbotContainer = document.getElementById('global-chatbot-container');

  if (!chatbotContainer) {
    // Create a container for the chatbot if it doesn't exist
    chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'global-chatbot-container';
    document.body.appendChild(chatbotContainer);
  }

  // Render the chatbot using React DOM
  const renderChatbot = async () => {
    const ReactDOM = await import('react-dom/client');
    const React = await import('react');

    const root = ReactDOM.createRoot(chatbotContainer);
    root.render(React.createElement(GlobalChatbot));
  };

  // Render the chatbot
  renderChatbot();
}