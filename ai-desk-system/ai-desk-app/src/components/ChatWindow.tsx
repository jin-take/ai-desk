import React, { useRef, useEffect } from 'react';
import Message from './Message';

interface ChatWindowProps {
  messages: { text: string; isUser: boolean }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-window" ref={chatWindowRef}>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUser={message.isUser} />
      ))}
    </div>
  );
};

export default ChatWindow;
