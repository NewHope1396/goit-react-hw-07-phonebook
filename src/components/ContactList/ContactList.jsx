import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </List>
  );
};
