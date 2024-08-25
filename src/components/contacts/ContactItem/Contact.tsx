import { useContext } from 'react';
import { ConversationContext } from '../../../Chat';
import type { ContactType } from '../Contacts';
import { Avatar } from './Avatar';
import { LastMessage } from './LastMessage';

type Props = {
  contact: ContactType;
};

export const Contact = ({ contact }: Props) => {
  const { conversationId: selectedConversationId, setConversationId } = useContext(ConversationContext);
  const { avatarUrl, name, lastMessage, conversationId } = contact;
  const isSelected = conversationId === selectedConversationId;
  const backgroundColor = isSelected ? 'bg-[#17233f]' : '';

  const handleClick = () => {
    console.log('CV s', conversationId, selectedConversationId);
    return setConversationId(conversationId);
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
