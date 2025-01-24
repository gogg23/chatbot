import React, { useRef } from 'react';

const ChartForm = () => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    console.log(userMessage);
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

export default ChartForm;
