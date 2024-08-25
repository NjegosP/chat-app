import { useQuery } from '@tanstack/react-query';
import { contactData } from '../../data/data';

export const useContacts = () => {
  const { data: contacts, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => contactData,
    staleTime: Infinity,
  });

  return { contacts, isLoading };
};
