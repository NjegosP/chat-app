import { createContext, useState } from 'react';
import { Contacts } from './components/contacts/Contacts';
import { Conversation } from './components/conversation/Conversation';

export const ConversationContext = createContext(null);

const Chat = () => {
  const [conversationId, setConversationId] = useState(500);

  const contextValue = { conversationId, setConversationId };
  return (
    <ConversationContext.Provider value={contextValue}>
      <Contacts />
      <Conversation />
    </ConversationContext.Provider>
  );
};

export default Chat;
