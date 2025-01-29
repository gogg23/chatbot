import React, { useState } from 'react';

const ChartForm = ({ setChatHistory }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setChatHistory((prev) => [...prev, { role: 'user', content: input }]);
      setInput(''); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit} className='chat-form'>
      <input
        type='text'
        placeholder='Type your message...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ChartForm;
