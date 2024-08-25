import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import { useConversationContext } from '../../../contexts/ConversationContext';
import type { MessageType } from '../../../data/data';
import { ReplyMessage } from '../Reply/ReplyBox';
import { isEmojiOnly } from '../../../utils/helpers';

type Props = {
  message: MessageType;
  prevMessage: MessageType;
  handleLike: (message: MessageType) => void;
  handleReply: (message: MessageType) => void;
};

const Message = ({ message, prevMessage, handleLike, handleReply }: Props) => {
  const { senderId, messageText, isLiked, replyMessage } = message;
  const { selectedContact } = useConversationContext();
  const [isReplyHidden, setIsReplyHidden] = useState(true);
  const isConsecutive = prevMessage && prevMessage?.senderId === senderId;
  const isUserMessage = senderId === 1;
  const messageAlignment = isUserMessage ? 'self-end' : 'self-start';
  const messageColor = isUserMessage ? 'bg-[#0F172A]' : 'bg-[#17274b]';
  const margin = isConsecutive ? 'mt-0.5' : 'mt-2';
  const marginBottom = isLiked ? 'mb-3' : '';
  const isEmoji = isEmojiOnly(messageText);
  const fontSize = isEmoji ? 'text-5xl' : 'text-sm';
  const rowDirection = isUserMessage ? 'flex-row' : 'flex-row-reverse';

  const onDoubleClick = () => {
    if (isUserMessage) return;
    handleLike(message);
  };

  return (
    <li
      onMouseEnter={() => setIsReplyHidden(false)}
      onMouseLeave={() => setIsReplyHidden(true)}
      onDoubleClick={onDoubleClick}
      className={`relative flex ${rowDirection} ${marginBottom} ${margin} w-fit max-w-[70%] ${messageAlignment} cursor-default select-none items-center last:mb-4`}
    >
      <ReplyBubble
        isHidden={isReplyHidden}
        onClick={() => handleReply(message)}
      />
      <div className={`relative flex flex-col ${messageColor} text-sky-500 p-2 rounded-lg`}>
        {replyMessage && (
          <div className="mb-2">
            <ReplyMessage
              isUserMessage={replyMessage.senderId === 1}
              message={replyMessage.messageText}
              contactName={selectedContact.name}
              bgColor="bg-[#121e3b]"
            />
          </div>
        )}
        {!isUserMessage && !isConsecutive && (
          <div className="text-sm font-semibold text-[#E2E8F0] mb-1">{selectedContact.name}</div>
        )}
        <div className={`${fontSize}`}>{messageText}</div>
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

const ReplyBubble = ({ isHidden, onClick }: { isHidden: boolean; onClick: () => void }) => {
  const display = isHidden ? 'opacity-0' : 'opacity-100';
  return (
    <button
      type="button"
      className={`p-1 mx-2 rounded-full bg-gray-600/30 ${display} transition-opacity`}
      onClick={onClick}
    >
      <ChatBubbleOvalLeftIcon className="size-4 text-sky-500" />
    </button>
  );
};

export default memo(Message);
