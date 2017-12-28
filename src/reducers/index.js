import { combineReducers } from 'redux';
import reducer from './reducers';
import requestReducer from '../requests'
import startPageReducers from '../startPage'


export default combineReducers({
  reducer,
  requestReducer,
  startPageReducers
});
