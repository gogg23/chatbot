import React from 'react';

const ChartForm = () => {
    const handleFormSubmit (e)=> {
        e.preventDefault();
    }
  return (
    <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
      <input
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
