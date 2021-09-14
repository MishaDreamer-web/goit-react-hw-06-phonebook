import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact-form/Add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const removeContact = createAction('contact-form/Remove');

const changeFilter = createAction('contact-form/changeFilter');

export default { addContact, removeContact, changeFilter };
