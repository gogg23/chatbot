import React, { useRef } from 'react';

const ChartForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    //update chat history with the user's message

    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage },
    ]);

    //update chat history with the user's message

    setTimeout(() =>
      setChatHistory((history) => [
        ...history,
        { role: 'user', text: userMessage },
      ])
    );
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
