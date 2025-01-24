import { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChartForm from './components/ChartForm';

const App = () => {
  const [chatHistory, setChartHistory] = useState([]);
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/*Chatbot Header*/}
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button className='material-symbols-rounded'>
            keyboard_arrow_down
          </button>
        </div>
        {/*Chatbot Body*/}
        <div className='chat-body'>
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Hey there 👋
              <br />
              How can I help you today?
            </p>
          </div>
          <div className='message user-message'>
            <p className='message-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/*Chatbot Footer*/}
        <div className='chat-footer'>
          <ChartForm />
        </div>
      </div>
    </div>
  );
};

export default App;
