import { useEffect } from 'react';
import { useContacts } from './api/hooks/useContacts';
import { Contacts } from './components/contacts/Contacts';
import { Conversation } from './components/conversation/Conversation';
import { useConversationContext } from './contexts/ConversationContext';

const Chat = () => {
  const { contacts } = useContacts();
  const { selectedContact, setSelectedContact } = useConversationContext();

  useEffect(() => {
    if (contacts && !selectedContact) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts]);

  return (
    <div className="flex flex-row min-h-dvh">
      <Contacts />
      {selectedContact && <Conversation />}
    </div>
  );
};

export default Chat;
