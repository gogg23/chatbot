import { useRef } from 'react';

const ChartForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading.

    const userMessage = inputRef.current?.value.trim(); // Safely access input value.
    if (!userMessage) return; // Do nothing if the input is empty.

    inputRef.current.value = ''; // Clear the input field.

    // Update chat history with the user's message.
    setChatHistory((history) => [
      ...history,
      { role: 'user', text: userMessage },
    ]);

    // Add a placeholder for the bot's response.
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: 'model', text: 'Thinking...' },
      ]);
    }, 600);
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
      <button className='material-symbols-rounded' type='submit'>
        arrow_upward
      </button>
    </form>
  );
};

export default ChartForm;
