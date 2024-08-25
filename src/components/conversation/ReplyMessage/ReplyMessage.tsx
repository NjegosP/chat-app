export const ReplyMessage = ({
  message,
  isUserMessage,
  bgColor,
  contactName,
}: {
  message: string;
  isUserMessage: boolean;
  bgColor?: string;
  contactName: string;
}) => {
  const messageBorderColor = isUserMessage ? 'border-green-300' : 'border-teal-300';
  return (
    <div className={`flex-1 flex-col px-3 py-2 border-l-8  rounded-lg bg-gray-900/50 ${messageBorderColor} ${bgColor}`}>
      <div className="flex flex-row justify-between">
        <div className="text-sm font-bold text-[#E2E8F0]">{isUserMessage ? 'You' : contactName}</div>
      </div>
      <div className="max-h-12 py-1">
        <div className="text-sky-400 text-sm max-h-10 overflow-hidden">{message}</div>
      </div>
    </div>
  );
};
