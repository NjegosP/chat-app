import { HandThumbUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { FormEvent, useState } from 'react';
import { MessageType } from '../../../data/data';

const userId = 1;

type Props = {
  handleSubmit: (newMessage: MessageType) => void;
};

export const MessageBox = ({ handleSubmit }: Props) => {
  const [currentMessage, setCurrentMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!currentMessage) return;
    handleSubmit({ messageText: currentMessage, senderId: userId, isLiked: false, id: 505 });
    setCurrentMessage('');
  };

  const addLike = () => handleSubmit({ messageText: '👍', senderId: userId, isLiked: false, id: 404 });

  return (
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
  );
};
