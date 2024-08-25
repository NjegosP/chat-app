import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConversationContextProvider, useConversationContext } from '../ConversationContext';

import userEvent from '@testing-library/user-event';
import { contactData, ContactType } from '../../data/data';

const mockContact: ContactType = contactData[0];

const TestComponent = () => {
  const { selectedContact, setSelectedContact } = useConversationContext();

  return (
    <div>
      {!!selectedContact && <p>Selected Contact: {selectedContact.name}</p>}
      <button onClick={() => setSelectedContact(mockContact)}>Select Contact</button>
    </div>
  );
};

describe('ConversationContext', () => {
  it('provides the context value to its children', () => {
    render(
      <ConversationContextProvider>
        <TestComponent />
      </ConversationContextProvider>,
    );

    userEvent.click(screen.getByText('Select Contact'));

    expect(screen.getByText('Selected Contact: Alice')).toBeInTheDocument();
  });

  it('throws an error if useConversationContext is used outside the provider', () => {
    const renderOutsideProvider = () => render(<TestComponent />);

    expect(renderOutsideProvider).toThrow('use conversation context only inside Conversation Context Provider');
  });
});
