import React, { useState } from 'react';
import ChartForm from './ChartForm';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/* Chat Body */}
        <div className='chat-body'>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.role === 'user' ? 'user-message' : 'bot-message'
              }`}
            >
              <p className='message-text'>{message.text}</p>
            </div>
          ))}
        </div>

        {/* Chat Form */}
        <div className='chat-footer'>
          <ChartForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
