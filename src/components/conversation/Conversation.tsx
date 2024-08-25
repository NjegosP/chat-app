import { useCallback, useRef, useState } from 'react';
import { useConversation } from '../../api/hooks/useConversation';
import { useConversationContext } from '../../contexts/ConversationContext';
import type { MessageType } from '../../data/data';
import Message from './Message/Message';
import { MessageBox } from './MessageBox/MessageBox';
import { ReplyBox } from './Reply/ReplyBox';
import { useContacts } from '../../api/hooks/useContacts';

export const Conversation = () => {
  const { selectedContact } = useConversationContext();
  const { updateLastMessage } = useContacts();
  const { conversation, isLoading, addNewMessage, likeMessage } = useConversation(selectedContact.conversationId);
  const [replyMessage, setReplyMessage] = useState(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (newMessage: MessageType) => {
    if (replyMessage) {
      newMessage.replyMessage = replyMessage;
      setReplyMessage(null);
    }
    addNewMessage.mutate({ id: selectedContact?.conversationId, messages: [...conversation.messages, newMessage] });
    updateLastMessage.mutate({ conversationId: selectedContact.conversationId, message: newMessage.messageText });

    setTimeout(() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }));
  };

  const handleReply = useCallback((message: MessageType) => {
    setReplyMessage(message);
  }, []);

  const onClearReply = () => setReplyMessage(null);

  const handleLike = useCallback(
    (message: MessageType) => {
      likeMessage.mutate({ id: selectedContact?.conversationId, message });
    },
    [selectedContact?.conversationId],
  );

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#2c374d] flex flex-col"
    >
      <ul className="flex flex-col flex-1 m-1 items-end px-3">
        {isLoading ? (
          <p>is loading...</p>
        ) : (
          conversation.messages.map((message, idx) => (
            <Message
              key={message.id}
              message={message}
              prevMessage={conversation.messages[idx - 1]}
              handleLike={handleLike}
              handleReply={handleReply}
            />
          ))
        )}
      </ul>
      <div className="sticky bottom-0">
        {!!replyMessage && (
          <ReplyBox
            message={replyMessage.messageText}
            isUserMessage={replyMessage.senderId === 1}
            onClearReply={onClearReply}
            contactName={selectedContact.name}
          />
        )}

        <MessageBox
          key={selectedContact.conversationId}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
