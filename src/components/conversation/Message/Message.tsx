import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import type { MessageType } from '../../../data/data';

type Props = {
  text: string;
  senderId: number;
  prevMessage: MessageType;
  isLiked: boolean;
  handleLike: (id: number) => void;
  id: number;
};

const Message = ({ text, senderId, prevMessage, isLiked, handleLike, id }: Props) => {
  const [isReplyHidden, setIsReplyHidden] = useState(true);
  const isConsecutive = prevMessage && prevMessage?.senderId === senderId;
  const isUserMessage = senderId === 1;
  const messageAlignment = isUserMessage ? 'self-end' : 'self-start';
  const messageColor = isUserMessage ? 'bg-[#0F172A]' : 'bg-[#17274b]';
  const margin = isConsecutive ? 'mt-0.5' : 'mt-2';
  const marginBottom = isLiked ? 'mb-3' : '';
  const isEmoji = isEmojiOnly(text);
  const fontSize = isEmoji ? 'text-5xl' : 'text-sm';
  const rowDirection = isUserMessage ? 'flex-row' : 'flex-row-reverse';

  const onDoubleClick = () => {
    if (isUserMessage) return;
    handleLike(id);
  };

  return (
    <li
      onMouseEnter={() => setIsReplyHidden(false)}
      onMouseLeave={() => setIsReplyHidden(true)}
      onDoubleClick={onDoubleClick}
      className={`relative flex ${rowDirection} ${marginBottom} ${margin} w-fit max-w-[70%] ${messageAlignment} cursor-default select-none items-center last:mb-4`}
    >
      <Reply isHidden={isReplyHidden} />
      <div className={`relative flex flex-col ${messageColor} text-sky-500 p-2 rounded-lg`}>
        {!isUserMessage && !isConsecutive && <div className="text-sm font-semibold text-[#E2E8F0] mb-1">John</div>}
        <div className={`${fontSize}`}>{text}</div>
        {isLiked && <Like isUserMessage={isUserMessage} />}
      </div>
    </li>
  );
};

const Like = ({ isUserMessage }: { isUserMessage: boolean }) => {
  const position = isUserMessage ? 'right-1' : 'left-1';
  return (
    <div className={`absolute -bottom-3 ${position} px-1 py-0.5 bg-[#0F172A] border-[#2c374d] rounded-lg`}>
      <HeartIcon className="size-4 text-red-500" />
    </div>
  );
};

const Reply = ({ isHidden }: { isHidden: boolean }) => {
  const display = isHidden ? 'opacity-0' : 'opacity-100';
  return (
    <button
      type="button"
      className={`p-1 mx-2 rounded-full bg-gray-600/30 ${display} transition-opacity`}
    >
      <ChatBubbleOvalLeftIcon className="size-4 text-sky-500" />
    </button>
  );
};

export default memo(Message);

const isEmojiOnly = (string) => {
  const stringToTest = string.replace(/ /g, '');
  const emojiRegex =
    /^(?:\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}|\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(?:\u{200D}\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}|\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*)$/u;
  return emojiRegex.test(stringToTest) && Number.isNaN(Number(stringToTest));
};
