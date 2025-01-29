import React from 'react';
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${
        chat.role === 'model' ? 'bot-message' : 'user-message'
      }`}
    >
      <p className='message-text'>
        {chat.role === 'model' && <ChatbotIcon />}
        {chat.text} {/* Ensure text is correctly rendered */}
      </p>
    </div>
  );
};
