import {
  WRITE_PASSWORD,
  SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
  password1: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log('initState', state);
  switch (action.type) {
    case WRITE_PASSWORD: {
      return {
        ...state,
        password1: action.payload
      };
    }
    case SELECT_CAPO: {
      return {
        ...state,
        selectedCapo: action.payload
      };
    }
    default:
      return state;
  }
};
