import { SAVE_PRIVATE_KEY } from './startPage.action';

const INITIAL_STATE = {
  privateKey: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_PRIVATE_KEY: {
      return {
        ...state,
        privateKey: action.payload
      };
    }
    default:
      return state;
  }
};
