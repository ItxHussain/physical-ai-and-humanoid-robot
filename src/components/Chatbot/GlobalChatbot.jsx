import React, { useEffect } from 'react';
import FloatingButton from './FloatingButton';

// This component will be loaded on every page
const GlobalChatbot = () => {
  useEffect(() => {
    // This effect runs when component mounts
    // The chatbot is persistent across all pages
  }, []);

  return <FloatingButton />;
};

export default GlobalChatbot;