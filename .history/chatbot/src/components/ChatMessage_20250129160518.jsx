import React from 'react';
import ChatbotIcon from './ChatbotIcon';
const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}
    >
      <p className='message-text'>{chat.text}</p>{' '}
      {/* Ensure you're rendering the text */}
    </div>
  );
};

export default ChatMessage;
