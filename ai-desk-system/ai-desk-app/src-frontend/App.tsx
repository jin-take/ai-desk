import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import InputContainer from './components/InputContainer';
import './styles/style.css';

const App: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessages = [...messages, { text: message, isUser: true }];
    setMessages(newMessages);

    setTimeout(() => {
      const botReply = { text: `Echo: ${message}`, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 500);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>AI Desk System</h1>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ChatWindow messages={messages} />
      <InputContainer onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
