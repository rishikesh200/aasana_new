import React, { createContext, useContext, useState } from 'react';

const ChatBotContext = createContext();

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (!context) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  return context;
};

export const ChatBotProvider = ({ children }) => {
  const [chatBot, setChatBot] = useState(false);

  const toggleChatBot = () => {
    setChatBot((prev) => !prev);
  };

  return (
    <ChatBotContext.Provider value={{ chatBot, setChatBot, toggleChatBot }}>
      {children}
    </ChatBotContext.Provider>
  );
};

