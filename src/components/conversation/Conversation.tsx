import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { MessageType } from '../../data/data';
import { conversations } from '../../data/data';
import Message from './Message/Message';
import { MessageBox } from './MessageBox/MessageBox';
import { ReplyBox } from './Reply/ReplyBox';
import { ConversationContext } from '../../Chat';

export const Conversation = () => {
  const { conversationId: selectedConversationId } = useContext(ConversationContext);
  const [messages, setMessages] = useState(conversations[0].messages);
  const [replyMessage, setReplyMessage] = useState(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedConversationId === 501) {
      setMessages(conversations[1].messages);
    }
  }, [selectedConversationId]);

  const handleSubmit = (newMessage: MessageType) => {
    if (replyMessage) {
      newMessage.replyMessage = replyMessage;
    }
    setMessages((prev) => [...prev, newMessage]);
    setReplyMessage('');
    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }));
  };

  const handleReply = useCallback((message: MessageType) => {
    setReplyMessage(message);
  }, []);

  const onClearReply = () => setReplyMessage(null);

  const handleLike = useCallback((id) => {
    setMessages((prev) => {
      const updatedMessages = prev.map((message) => {
        if (message.id === id) {
          message.isLiked = true;
        }
        return message;
      });
      return updatedMessages;
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#2c374d] flex flex-col"
    >
      <ul className="flex flex-col flex-1 m-1 items-end px-3">
        {messages.map((message, idx) => (
          <Message
            key={message.id}
            message={message}
            prevMessage={messages[idx - 1]}
            handleLike={handleLike}
            handleReply={handleReply}
          />
        ))}
      </ul>
      <div className="sticky bottom-0">
        {!!replyMessage && (
          <ReplyBox
            message={replyMessage.messageText}
            isUserMessage={replyMessage.senderId === 1}
            onClearReply={onClearReply}
          />
        )}

        <MessageBox
          key={selectedConversationId}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
