import { connect } from 'react-redux';
import contactFormActions from '../../redux/contact-form/contact-form-actions.js';
import ContactsList from './ContactList.js';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactFormActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
