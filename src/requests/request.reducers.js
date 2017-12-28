import {
  WRITE_PASSWORD,
  SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
  recipient: {
    privateKeyRecipient: '',
    title: '',
    description: '',
    countNeed: '',
    countNow: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  console.log('initState', state);
  switch (action.type) {
    case 'ADD_RECEPIENTS': {
      return {
        ...state,
        recipient: action.payload
      };
    }
    default:
      return state;
  }
};
