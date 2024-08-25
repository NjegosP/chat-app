import { useContacts } from '../../api/hooks/useContacts';
import { ContactItem } from './ContactItem/ContactItem';

export const Contacts = () => {
  const { contacts, isLoading } = useContacts();

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="flex-1 w-auto p-3 bg-[#0F172A] sm:min-w-96 ">
      <div className="sticky top-0">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.userId}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};
