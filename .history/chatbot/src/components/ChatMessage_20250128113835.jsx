const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}
    >
      <p className='message-text'>
        {chat.role === 'model' && <ChatbotIcon />}
        {chat.content} {/* Display the message text */}
      </p>
    </div>
  );
};
