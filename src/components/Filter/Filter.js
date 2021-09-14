import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contact-form/contact-form-selectors';
import contactFormActions from '../../redux/contact-form/contact-form-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={e => dispatch(contactFormActions.changeFilter(e.target.value))}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
