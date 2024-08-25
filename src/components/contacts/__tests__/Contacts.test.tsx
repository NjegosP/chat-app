import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Contacts } from '../Contacts';
import { useConversationContext } from '../../../contexts/ConversationContext'; // Adjust import path as necessary
import { useContacts } from '../../../api/hooks/useContacts';
import { contactData } from '../../../data/data';
import { UseMutationResult } from '@tanstack/react-query';

jest.mock('../../../api/hooks/useContacts');
jest.mock('../../../contexts/ConversationContext');

type MockUseMutationResult = UseMutationResult<
  { conversationId: number; message: string },
  Error,
  { conversationId: number; message: string }
>;

const mockContacts = contactData;

const mockUseContacts = useContacts as jest.MockedFunction<typeof useContacts>;
const mockUseConversationContext = useConversationContext as jest.MockedFunction<typeof useConversationContext>;

describe('Contacts Component', () => {
  beforeEach(() => {
    mockUseContacts.mockReturnValue({
      contacts: mockContacts,
      isLoading: false,
      updateLastMessage: jest.fn() as unknown as MockUseMutationResult,
    });

    mockUseConversationContext.mockReturnValue({
      selectedContact: null,
      setSelectedContact: jest.fn(),
    });
  });

  test('renders contacts when loading is false', () => {
    render(<Contacts />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Perfect. I’ll send over some time slots.')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Alright, I’m in.')).toBeInTheDocument();
  });

  test('does not render contacts when loading is true', () => {
    mockUseContacts.mockReturnValueOnce({
      contacts: [],
      isLoading: true,
      updateLastMessage: jest.fn() as unknown as MockUseMutationResult,
    });

    render(<Contacts />);

    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading ...')).toBeInTheDocument();
  });

  test('calls setSelectedContact when a contact is clicked', () => {
    const setSelectedContactMock = jest.fn();
    mockUseConversationContext.mockReturnValueOnce({
      selectedContact: null,
      setSelectedContact: setSelectedContactMock,
    });

    render(<Contacts />);

    const contact = screen.getByText('Alice').closest('a');
    fireEvent.click(contact);

    expect(setSelectedContactMock).toHaveBeenCalledWith(mockContacts[0]);
  });

  test('highlights the selected contact', () => {
    mockUseConversationContext.mockReturnValueOnce({
      selectedContact: mockContacts[0],
      setSelectedContact: jest.fn(),
    });

    render(<Contacts />);

    const contact = screen.getByText('Alice').closest('a');
    expect(contact).toHaveClass('bg-[#17233f]');
  });
});
