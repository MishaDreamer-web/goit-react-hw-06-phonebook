import { useSelector, useDispatch } from 'react-redux';
import contactFormActions from '../../redux/contact-form/contact-form-actions.js';
import { getVisibleContacts } from '../../redux/contact-form/contact-form-selectors.js';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemove = id => dispatch(contactFormActions.removeContact(id));

  if (contacts.length === 0) return <p>There are no contacts in the list</p>;

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemove(id)}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
