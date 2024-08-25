import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = { message: string; isUserMessage: boolean; onClearReply: () => void };

export const ReplyBox = ({ message, isUserMessage, onClearReply }: Props) => {
  return (
    <div className="bg-gray-800 pt-2 px-2 flex flex-row items-center">
      <ReplyMessage
        message={message}
        isUserMessage={isUserMessage}
      />
      <button
        type="button"
        onClick={onClearReply}
        className="flex justify-center items-center w-7 h-7 rounded-full bg-gray-900/50 m-2"
      >
        <XMarkIcon className="size-5 text-sky-500" />
      </button>
    </div>
  );
};

export const ReplyMessage = ({
  message,
  isUserMessage,
  bgColor,
}: {
  message: string;
  isUserMessage: boolean;
  bgColor?: string;
}) => {
  const messageBorderColor = isUserMessage ? 'border-green-300' : 'border-teal-300';
  return (
    <div className={`flex-1 flex-col px-3 py-2 border-l-8  rounded-lg bg-gray-900/50 ${messageBorderColor} ${bgColor}`}>
      <div className="flex flex-row justify-between">
        <div className="text-sm font-bold text-[#E2E8F0]">{isUserMessage ? 'You' : 'John'}</div>
      </div>
      <div className="max-h-12 py-1">
        <div className="text-sky-400 text-sm max-h-10 overflow-hidden">{message}</div>
      </div>
    </div>
  );
};
