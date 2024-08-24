import { useCallback, useRef, useState } from 'react';
import type { MessageType } from '../../data/data';
import { conversations } from '../../data/data';
import Message from './Message/Message';
import { MessageBox } from './MessageBox/MessageBox';
import { Reply } from './Reply/Reply';

export const Conversation = () => {
  const [messages, setMessages] = useState(conversations[0].messages);
  const [isReply, setIsReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newMessage: MessageType) => {
    setMessages((prev) => [...prev, newMessage]);
    setIsReply(false);
    setReplyMessage('');
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }));
  };

  const handleReply = (text: string) => {
    setIsReply(true);
    setReplyMessage(text);
  };

  const handleLike = useCallback((id) => {
    setMessages((prev) => {
      const updatedMessages = prev.map((message) => {
        if (message.id === id) {
          message.isLiked = true;
        }
        return message;
      });
      return updatedMessages;
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#2c374d] flex flex-col"
    >
      <ul className="flex flex-col flex-1 m-1 items-end px-3">
        {messages.map(({ message, senderId, isLiked, id }, idx) => (
          <Message
            key={id}
            text={message}
            senderId={senderId}
            isLiked={isLiked}
            prevMessage={messages[idx - 1]}
            id={id}
            handleLike={handleLike}
            handleReply={handleReply}
          />
        ))}
      </ul>
      <div className="sticky bottom-0">
        {isReply && <Reply message={replyMessage} />}
        <MessageBox handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
