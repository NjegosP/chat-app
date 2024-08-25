import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { contactData, ContactType } from '../../data/data';

export const useContacts = () => {
  const queryClient = useQueryClient();
  const { data: contacts, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => contactData,
    staleTime: Infinity,
  });

  const updateLastMessage = useMutation({
    mutationFn: async ({ conversationId, message }: { conversationId: number; message: string }) => ({
      conversationId,
      message,
    }),
    onSuccess: (data) => {
      queryClient.setQueryData(['contacts'], (oldData: ContactType[]) => {
        if (!oldData) return;

        const updatedContacts = oldData.map((contact) =>
          contact.conversationId === data.conversationId ? { ...contact, lastMessage: data.message } : contact,
        );

        return [...updatedContacts];
      });
    },
  });

  return { contacts, isLoading, updateLastMessage };
};
