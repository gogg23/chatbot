import ChatbotIcon from './components/ChatbotIcon';

const App = () => {
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/* */}
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button className='material-symbols-rounded'>
            keyboard_arrow_down
          </button>
        </div>
        <div className='chat-body'></div>
      </div>
    </div>
  );
};

export default App;
