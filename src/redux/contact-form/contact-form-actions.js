import shortid from 'shortid';
import types from './contact-form-types';

const addContact = ({ name, number }) => ({
  types: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export default { addContact };
