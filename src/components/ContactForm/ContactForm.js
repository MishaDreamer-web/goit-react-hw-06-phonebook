import React, { useState } from 'react';
import { connect } from 'react-redux';
import contactFormActions from '../../redux/contact-form/contact-form-actions';
import PropTypes from 'prop-types';

import shortid from 'shortid';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onAddContact({ name, number });

    if ((!name && number) || (name && !number)) {
      return;
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <input
        id={numberInputId}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeForm}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

const mapDispatchToProps = dispatch => ({
  onAddContact: data => dispatch(contactFormActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
