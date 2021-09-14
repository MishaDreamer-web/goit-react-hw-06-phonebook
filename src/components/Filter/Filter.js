import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactFormActions from '../../redux/contact-form/contact-form-actions';

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Enter name for Search"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactFormActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
