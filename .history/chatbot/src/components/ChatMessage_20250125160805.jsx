import React from 'react';
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${
        chat.role === 'model' ? 'bot-message' : 'user-message'
      }`}
    >
      <div className='message-text'>
        {chat.role === 'model' && <ChatbotIcon />}
        {chat.content}
      </div>
    </div>
  );
};

export default ChatMessage;
