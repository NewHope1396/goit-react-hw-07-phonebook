import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsSection } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <ContactsSection>
        <Filter></Filter>
        <ContactList></ContactList>
      </ContactsSection>
    </Container>
  );
};
