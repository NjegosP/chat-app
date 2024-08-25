import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { memo, useState } from 'react';
import { useConversationContext } from '../../../contexts/ConversationContext';
import type { MessageType } from '../../../data/data';
import { ReplyMessage } from '../ReplyMessage/ReplyMessage';
import { getMessageStyles } from './helpers';

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
  const { messageAlignment, messageColor, margin, marginBottom, fontSize, rowDirection } = getMessageStyles({
    isUserMessage,
    isConsecutive,
    isLiked,
    messageText,
  });

  const onDoubleClick = () => {
    if (isUserMessage) return;
    handleLike(message);
  };

  return (
    <li
      onMouseEnter={() => setIsReplyHidden(false)}
      onMouseLeave={() => setIsReplyHidden(true)}
      onDoubleClick={onDoubleClick}
      className={`relative flex w-fit max-w-[70%] ${rowDirection} ${marginBottom} ${margin}  ${messageAlignment} cursor-default select-none items-center last:mb-4`}
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
