import { Button, Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button onClick={() => dispatch(deleter(contact.id))} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
