import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { ContactType } from '../data/data';

type ConversationContext = { selectedContact: ContactType; setSelectedContact: Dispatch<SetStateAction<ContactType>> };

const ConversationContext = createContext<ConversationContext | null>(null);

export const ConversationContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null);
  const contextValue = { selectedContact, setSelectedContact };

  return <ConversationContext.Provider value={contextValue}>{children}</ConversationContext.Provider>;
};

export const useConversationContext = () => {
  const context = useContext(ConversationContext);

  if (!context) {
    throw new Error('use conversation context only inside Conversation Context Provider');
  }

  return context;
};
