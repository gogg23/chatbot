import React from 'react';

const ChatMessage = ({ chat }) => {
  return (
    <div className={`message${chat.role === 'model' ? 'bot' : 'user'}-message`}>
      <p className='message-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default ChatMessage;
