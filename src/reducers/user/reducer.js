import {ActionType} from '../../actions/user/action';

const initialState = {
  isAuthorizationRequired: false,
  favorites: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });

  }

  return state;
};
