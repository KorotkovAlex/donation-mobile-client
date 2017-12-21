import {
  WRITE_PASSWORD,
  SELECT_CAPO
} from '../actions/types';

function _getUser() {
  // navigate('UserProfile');
  console.log("Post");
  return fetch(`http://192.168.0.100:3000/getusers`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    console.log('response',  response._bodyInit);
    var users = response._bodyInit
    return users;
  }).catch((error) => {
    console.error(error);
  });
}

const INITIAL_STATE = {
  users: _getUser(),
};

export default (state = INITIAL_STATE, action) => {
  console.log('initState', state);
  switch (action.type) {
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload
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
