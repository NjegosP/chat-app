import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Conversation, conversations, MessageType } from '../../data/data';

export const useConversation = (id: number) => {
  const queryClient = useQueryClient();
  const conversationData = conversations.find(({ id: conversationId }) => conversationId === id);

  const { data: conversation, isLoading } = useQuery({
    queryKey: ['conversation', id],
    queryFn: () => conversationData,
    staleTime: Infinity,
  });

  const addNewMessage = useMutation({
    mutationFn: async ({ id, messages }: Conversation) => ({ id, messages }),
    onSuccess: (data) => {
      queryClient.setQueryData(['conversation', data.id], data);
    },
  });

  const likeMessage = useMutation({
    mutationFn: async ({ id, message }: { id: number; message: MessageType }) => ({ id, message }),
    onSuccess: (data) => {
      queryClient.setQueryData(['conversation', data.id], (oldData: { messages: MessageType[] }) => {
        if (!oldData) return;

        const updatedMessages = oldData.messages.map((msg) =>
          msg.id === data.message.id ? { ...msg, isLiked: true } : msg,
        );

        return { ...oldData, messages: updatedMessages };
      });
    },
  });

  return { conversation, isLoading, addNewMessage, likeMessage };
};
