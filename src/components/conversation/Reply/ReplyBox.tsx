import { XMarkIcon } from '@heroicons/react/24/solid';
import { ReplyMessage } from '../ReplyMessage/ReplyMessage';

type Props = { message: string; isUserMessage: boolean; contactName: string; onClearReply: () => void };

export const ReplyBox = ({ message, isUserMessage, contactName, onClearReply }: Props) => {
  return (
    <div className="bg-gray-800 pt-2 px-2 flex flex-row items-center">
      <ReplyMessage
        message={message}
        isUserMessage={isUserMessage}
        contactName={contactName}
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
