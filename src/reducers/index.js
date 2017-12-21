import { combineReducers } from 'redux';
import reducer from './reducers';
import requestReducer from '../requests'

export default combineReducers({
  reducer,
  requestReducer
});
