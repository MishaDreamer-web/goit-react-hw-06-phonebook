import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactFormReducer from './contact-form/contact-form-reducer';

const rootReducer = combineReducers({
  contact: contactFormReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
