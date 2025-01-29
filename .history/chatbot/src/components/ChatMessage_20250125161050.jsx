import React from 'react';
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${
        chat.role === 'model' ? 'bot-message' : 'user-message'
      }`}
    >
      {chat.role === 'model' && <ChatbotIcon />}
      <p className='message-text'>{chat.content}</p>
    </div>
  );
};

export default ChatMessage;
