import React from 'react';

function ChartForm() {
  return (
    <form action='#' className='chat-form'>
      <input
        type='text'
        placeholder='message...'
        className='message-input'
        required
      />
      <button className='material-symbols-rounded'>arrow_upward</button>
    </form>
  );
}

export default ChartForm;
