import { useEffect } from 'react';
import { Contacts } from './components/contacts/Contacts';
import { Conversation } from './components/conversation/Conversation';
import { useConversationContext } from './contexts/ConversationContext';
import { useContacts } from './api/hooks/useContacts';

const Chat = () => {
  const { selectedContact, setSelectedContact } = useConversationContext();
  const { contacts, isSuccess } = useContacts();

  useEffect(() => {
    setSelectedContact(selectedContact ?? contacts?.[0]);
  }, [isSuccess]);

  return (
    <div className="flex flex-row min-h-dvh">
      <Contacts />
      {selectedContact && <Conversation />}
    </div>
  );
};

export default Chat;
