import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from '../Message/Message';
import { useConversationContext } from '../../../contexts/ConversationContext';
import { contactData, MessageType } from '../../../data/data';

jest.mock('../../../contexts/ConversationContext', () => ({
  useConversationContext: jest.fn(),
}));

const mockUseConversationContext = useConversationContext as jest.Mock;

const renderMessageComponent = (
  message: MessageType,
  prevMessage: MessageType,
  handleLike = jest.fn(),
  handleReply = jest.fn(),
) => {
  render(
    <Message
      message={message}
      prevMessage={prevMessage}
      handleLike={handleLike}
      handleReply={handleReply}
    />,
  );
};

describe('Message component', () => {
  beforeEach(() => {
    mockUseConversationContext.mockReturnValue({
      selectedContact: contactData[0],
    });
  });

  test('renders a user message', () => {
    const message = { id: 1, senderId: 1, messageText: 'hello', isLiked: false, replyMessage: null };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage);

    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  test('renders an emoji-only message with larger font size', () => {
    const message = { id: 2, senderId: 1, messageText: '😀', isLiked: false, replyMessage: null };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage);

    expect(screen.getByText('😀')).toHaveClass('text-5xl');
  });

  test('handles liking a message on double-click', () => {
    const handleLike = jest.fn();
    const message = { id: 3, senderId: 2, messageText: 'hello', isLiked: false, replyMessage: null };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage, handleLike);

    fireEvent.doubleClick(screen.getByText('hello'));

    expect(handleLike).toHaveBeenCalledWith(message);
  });

  test('does not handle liking a user message on double-click', () => {
    const handleLike = jest.fn();
    const message = { id: 4, senderId: 1, messageText: 'This is a user message', isLiked: false, replyMessage: null };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage, handleLike);

    fireEvent.doubleClick(screen.getByText('This is a user message'));

    expect(handleLike).not.toHaveBeenCalled();
  });

  test('renders reply message if present', () => {
    const message: MessageType = {
      id: 5,
      senderId: 2,
      messageText: 'replying to you',
      isLiked: false,
      replyMessage: { senderId: 1, messageText: 'original message', isLiked: false, id: 202 },
    };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage);

    expect(screen.getByText('original message')).toBeInTheDocument();
  });

  test('displays the contact name for non-consecutive messages', () => {
    const message = { id: 6, senderId: 2, messageText: 'nonconsecutive message', isLiked: false, replyMessage: null };
    const prevMessage = { id: 5, senderId: 1, messageText: 'previous message', isLiked: false, replyMessage: null };

    renderMessageComponent(message, prevMessage);

    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  test('hides reply bubble when not hovering and shows on hover', () => {
    const message = { id: 7, senderId: 2, messageText: 'hover me', isLiked: false, replyMessage: null };
    const prevMessage = null;

    renderMessageComponent(message, prevMessage);

    const replyBubble = screen.getByRole('button');

    expect(replyBubble).toHaveClass('opacity-0');

    fireEvent.mouseEnter(screen.getByText('hover me'));
    expect(replyBubble).toHaveClass('opacity-100');

    fireEvent.mouseLeave(screen.getByText('hover me'));
    expect(replyBubble).toHaveClass('opacity-0');
  });
});
