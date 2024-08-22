import React, { useCallback, useRef, useState } from 'react';
import { HandThumbUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import Message from './Message/Message';

const userId = 1;

const conversation = [
  { senderId: 1, message: "Hey there! How's it going? 😊", isLiked: false, id: 1 },
  { senderId: 2, message: "Hi! I'm doing well, thanks. What about you? 😃", isLiked: false, id: 2 },
  { senderId: 1, message: "I'm good, just a bit busy with work lately. 😅", isLiked: false, id: 3 },
  { senderId: 1, message: 'I’ve been working late nights and weekends. 😓', isLiked: false, id: 4 },
  { senderId: 1, message: 'It’s been really exhausting, but I’m pushing through.', isLiked: false, id: 5 },
  { senderId: 2, message: 'That sounds really tough. Do you get any time to relax?', isLiked: false, id: 6 },
  { senderId: 2, message: 'Maybe taking a short break or a walk could help. 🌳', isLiked: false, id: 7 },
  { senderId: 1, message: 'I’ve been trying to fit in some breaks, but it’s tough.', isLiked: false, id: 8 },
  { senderId: 1, message: 'I might take a walk today if I can. 🚶‍♂️', isLiked: false, id: 9 },
  {
    senderId: 2,
    message: 'That sounds like a good idea! Even a brief walk can be refreshing. 🌟',
    isLiked: false,
    id: 10,
  },
  { senderId: 1, message: 'Thanks for the suggestion!', isLiked: false, id: 11 },
  { senderId: 2, message: 'By the way, I’ve started a new hobby recently. 🎨', isLiked: false, id: 12 },
  { senderId: 2, message: "I've been painting, and it's been really relaxing. 😊", isLiked: false, id: 13 },
  { senderId: 2, message: 'It’s been a great way to unwind after a busy day.', isLiked: false, id: 14 },
  { senderId: 1, message: 'That sounds amazing! I’ve always wanted to try painting.', isLiked: false, id: 15 },
  { senderId: 1, message: 'Do you have any tips for beginners?', isLiked: false, id: 16 },
  {
    senderId: 2,
    message: 'Start with simple subjects and enjoy the process. Don’t worry about perfection.',
    isLiked: false,
    id: 17,
  },
  { senderId: 2, message: 'It’s all about having fun and experimenting! 🎨', isLiked: false, id: 18 },
  { senderId: 1, message: 'Thanks for the tips! I’ll definitely keep that in mind.', isLiked: false, id: 19 },
  { senderId: 2, message: 'You’re welcome! If you need more advice, just let me know. 😄', isLiked: false, id: 20 },
  { senderId: 1, message: 'I will. Let’s catch up again soon. 😊', isLiked: false, id: 21 },
  { senderId: 2, message: 'Sounds good! I’ll be here. 👋', isLiked: true, id: 22 },
  { senderId: 1, message: 'Bye for now!', isLiked: true, id: 23 },
  { senderId: 1, message: 'Have a great day! 😊', isLiked: false, id: 24 }, // Consecutive messages from sender 1
  { senderId: 2, message: 'You too! 😃', isLiked: false, id: 25 },
  { senderId: 2, message: 'Looking forward to our next chat!', isLiked: false, id: 26 },
  { senderId: 1, message: 'Me too. Talk soon!', isLiked: false, id: 27 },
  { senderId: 2, message: 'Absolutely! Bye for now!', isLiked: false, id: 28 },
  { senderId: 1, message: 'Bye! 😊', isLiked: false, id: 29 },
  { senderId: 2, message: 'Catch you later!', isLiked: false, id: 30 },
  { senderId: 1, message: 'Definitely. Have a great day!', isLiked: false, id: 31 },
  { senderId: 2, message: 'You too! 😄', isLiked: true, id: 32 },
  { senderId: 2, message: '😄', isLiked: false, id: 33 },
];

export const Conversation = () => {
  const [messages, setMessages] = useState(conversation);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
    setTimeout(() => containerRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end' }));
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
      <div className="flex flex-col flex-1 m-1 items-end px-3">
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
        {/* <div ></div> */}
      </div>
      <MessageBox handleSubmit={handleSubmit} />
    </div>
  );
};

const MessageBox = ({ handleSubmit }) => {
  const [currentMessage, setCurrentMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage) return;
    handleSubmit({ message: currentMessage, senderId: userId });
    setCurrentMessage('');
  };

  const addLike = () => handleSubmit({ message: '👍', senderId: userId });

  return (
    <div className="sticky bottom-0">
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
