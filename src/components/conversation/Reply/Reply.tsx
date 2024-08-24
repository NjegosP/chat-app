export const Reply = ({ message }: { message: string }) => {
  return (
    <div className="bg-gray-800 p-2">
      <div className="flex-col px-3 overflow-hidden">
        <div className="flex flex-row justify-between">
          <div className="text-sm font-bold text-sky-500">name</div>
        </div>
        <div className="truncate ... flex-1 text-sky-400 font-medium">{message}</div>
      </div>
    </div>
  );
};
