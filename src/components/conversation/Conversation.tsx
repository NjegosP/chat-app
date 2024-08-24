import { HandThumbUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { FormEvent, FormEventHandler, useCallback, useRef, useState } from 'react';
import type { MessageType } from '../../data/data';
import { conversations } from '../../data/data';
import Message from './Message/Message';
import { Reply } from './Reply/Reply';

const userId = 1;

export const Conversation = () => {
  const [messages, setMessages] = useState(conversations[0].messages);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newMessage: MessageType) => {
    setMessages((prev) => [...prev, newMessage]);
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }));
  };

  // useLayoutEffect(() => {
  //   //temporary solution
  //   setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' }), 300);
  // }, []);

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
          />
        ))}
      </ul>
      <MessageBox handleSubmit={handleSubmit} />
    </div>
  );
};

const MessageBox = ({
  handleSubmit,
  reply,
}: {
  handleSubmit: (newMessage: MessageType) => void;
  reply?: MessageType;
}) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [showReply, setShowReply] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!currentMessage) return;
    handleSubmit({ message: currentMessage, senderId: userId, isLiked: false, isReply: false, id: 505 });
    setCurrentMessage('');
    setShowReply(false);
  };

  const addLike = () => handleSubmit({ message: '👍', senderId: userId, isLiked: false, isReply: false, id: 404 });

  return (
    <div className="sticky bottom-0">
      {showReply && <Reply message={reply.message} />}
      <form onSubmit={onSubmit}>
        <div className="h-[60px] bg-[#1F293B] flex w-full">
          <input
            placeholder="Type a message..."
            className="flex-1 bg-[#2c374d] rounded-full mx-3 my-2 px-5 outline-none text-sky-500"
            onChange={(e) => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
          <button
            className="px-3"
            type="submit"
          >
            <PaperAirplaneIcon className="size-6 text-sky-500" />
          </button>
          <button
            className="px-3"
            type="button"
          >
            <HandThumbUpIcon
              className="size-6 text-sky-500"
              onClick={addLike}
            />
          </button>
        </div>
      </form>
    </div>
  );
};
