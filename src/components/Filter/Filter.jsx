import { nanoid } from 'nanoid';
import { Input, Label, Container } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'redux/contactsSlice';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);

  return (
    <Container>
      <Label htmlFor={filterInputId}>Find</Label>
      <Input
        id={filterInputId}
        onChange={e => dispatch(change(e.target.value))}
        type="text"
        value={filter}
      />
    </Container>
  );
};
