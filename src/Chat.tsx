import { createContext, useEffect, useState } from 'react';
import { Contacts } from './components/contacts/Contacts';
import { Conversation } from './components/conversation/Conversation';
import { contactData, ContactType } from './data/data';
import { useContacts } from './api/hooks/useContacts';

export const ConversationContext = createContext(null);

const Chat = () => {
  const { contacts } = useContacts();
  const [selectedContact, setSelectedContact] = useState<ContactType>(contactData[0]);
  const contextValue = { selectedContact, setSelectedContact };

  useEffect(() => {
    if (contacts && !selectedContact) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts]);

  return (
    <ConversationContext.Provider value={contextValue}>
      <div className="flex flex-row min-h-dvh">
        <Contacts />
        <Conversation />
      </div>
    </ConversationContext.Provider>
  );
};

export default Chat;
