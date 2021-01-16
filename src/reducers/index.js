import { combineReducers } from 'redux';
import filtersReducer from './filersReducer';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({
  filtersReducer,
  authorsReducer,
});

export default rootReducer;
