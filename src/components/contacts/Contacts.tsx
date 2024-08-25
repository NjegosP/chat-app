import { Contact } from './ContactItem/Contact';

export type ContactType = {
  name: string;
  lastMessage: string;
  conversationId: number;
  userId: number;
  avatarUrl: string;
};

const contacts: ContactType[] = [
  {
    name: 'Alice',
    lastMessage: "Hey there! How's it going? 😊",
    conversationId: 500,
    userId: 2,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'Bob',
    lastMessage: "Hi! I'm doing well, thanks. What about you? 😃",
    conversationId: 501,
    userId: 3,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Charlie',
    lastMessage: "Just finishing up a big project. It's taking a lot of time.",
    conversationId: 502,
    userId: 4,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
  },
  {
    name: 'Diana',
    lastMessage: 'Wow, that sounds cool. What kind of AI?',
    conversationId: 503,
    userId: 5,
    avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
];

export const Contacts = () => {
  return (
    <div className="flex-1 w-auto p-3 bg-[#0F172A] sm:min-w-96 ">
      <div className="sticky top-0">
        {contacts.map((contact) => (
          <Contact
            key={contact.userId}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};
