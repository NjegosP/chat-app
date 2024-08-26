import { useContacts } from '../../api/hooks/useContacts';
import { ContactItem } from './ContactItem/ContactItem';

export const Contacts = () => {
  const { contacts, isLoading } = useContacts();

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="flex-1 w-auto p-3 bg-[#0F172A] sm:min-w-96 h-screen sticky top-0 overflow-auto">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.userId}
          contact={contact}
        />
      ))}
    </div>
  );
};
