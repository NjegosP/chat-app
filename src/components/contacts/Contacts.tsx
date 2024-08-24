export type Contact = {
  name: string;
  lastMessage: string;
  conversationId: number;
  userId: number;
  avatarUrl: string;
};

const users: Contact[] = [
  {
    name: 'Alice',
    lastMessage: "Hey there! How's it going? 😊",
    conversationId: 500,
    userId: 1,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'Bob',
    lastMessage: "Hi! I'm doing well, thanks. What about you? 😃",
    conversationId: 501,
    userId: 2,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Charlie',
    lastMessage: "Just finishing up a big project. It's taking a lot of time.",
    conversationId: 502,
    userId: 3,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Diana',
    lastMessage: 'Wow, that sounds cool. What kind of AI?',
    conversationId: 503,
    userId: 4,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
];

export const Contacts = () => {
  return (
    <div className="flex-1 w-auto p-3 bg-[#0F172A] sm:min-w-96 ">
      <div className="sticky top-0">
        {users.map(({ avatarUrl, name, lastMessage, userId }) => (
          <Contact
            key={userId}
            src={avatarUrl}
            name={name}
            lastMessage={lastMessage}
          />
        ))}
      </div>
    </div>
  );
};

const Contact = ({ src, name, lastMessage }: { src: string; name: string; lastMessage: string }) => (
  <div className="mh-2 mb-2 p-3 hover:bg-[#17233f] rounded-md flex flex-row">
    <Avatar src={src} />
    <LastMessage
      name={name}
      lastMessage={lastMessage}
    />
  </div>
);

const Avatar = ({ src }: { src: string }) => (
  <div className="min-w-[50px]">
    <img
      src={src}
      className="w-[50px] h-[50px] rounded-full bg-pink-300"
    />
  </div>
);

const LastMessage = ({ name, lastMessage }: { name: string; lastMessage: string }) => (
  <div className="flex-col px-3 overflow-hidden hidden sm:flex">
    <div className="flex flex-row justify-between">
      <div className="text-sm font-bold text-sky-500">{name}</div>
      <div className="text-sm text-sky-400">Yesterday</div>
    </div>
    <div className="truncate flex-1 text-sky-400 font-medium">{lastMessage}</div>
  </div>
);
