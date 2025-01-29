import React, { useRef } from 'react';

const ChartForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage },
    ]);

    // Add a "Thinking..." placeholder message for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: 'model', text: 'Thinking...' }, // Placeholder for bot response
      ]);

      // Simulate bot response after some time (you can replace this with your actual bot logic)
      setTimeout(() => {
        setChatHistory((history) => [
          ...history,
          { role: 'model', text: 'Hello, I am the bot. How can I help you?' },
        ]);
      }, 1000); // Bot response delay
    }, 600); // Placeholder delay
  };

  return (
    <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type='text'
        placeholder='message...'
        className='message-input'
        required
      />
      <button className='material-symbols-rounded'>arrow_upward</button>
    </form>
  );
};

// Ensure default export
export default ChartForm;
