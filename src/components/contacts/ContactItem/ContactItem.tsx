import { useConversationContext } from '../../../contexts/ConversationContext';
import type { ContactType } from '../../../data/data';
import { Avatar } from './Avatar';
import { LastMessage } from './LastMessage';

type Props = {
  contact: ContactType;
};

export const ContactItem = ({ contact }: Props) => {
  const { selectedContact, setSelectedContact } = useConversationContext();

  const { avatarUrl, name, lastMessage, conversationId } = contact;
  const isSelected = conversationId === selectedContact?.conversationId;
  const backgroundColor = isSelected ? 'bg-[#17233f]' : '';

  const handleClick = () => {
    setSelectedContact(contact);
  };

  return (
    <a
      className={`mh-2 mb-2 p-3 hover:bg-[#17233f] rounded-md flex flex-row ${backgroundColor}`}
      onClick={handleClick}
    >
      <Avatar src={avatarUrl} />
      <LastMessage
        name={name}
        lastMessage={lastMessage}
      />
    </a>
  );
};
