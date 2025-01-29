import React from 'react';
import ChatbotIcon from './ChatbotIcon';

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}
    >
      <p className='message-text'>
        {chat.role === 'model' && <ChatbotIcon />}
        {chat.message}
      </p>
    </div>
  );
};

export default ChatMessage;
