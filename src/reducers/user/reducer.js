import {ActionType} from '../../actions/user/action';

const initialState = {
  isAuthorized: false,
  favorites: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS: return Object.assign({}, state, {
      isAuthorized: action.payload
    });

  }

  return state;
};
