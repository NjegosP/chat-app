export const LastMessage = ({ name, lastMessage }: { name: string; lastMessage: string }) => (
  <div className="flex-col px-3 overflow-hidden hidden sm:flex sm:flex-1">
    <div className="flex flex-row justify-between w-full">
      <div className="text-sm font-bold text-sky-500">{name}</div>
    </div>
    <div className="truncate flex-1 text-sky-400 font-medium">{lastMessage}</div>
  </div>
);
