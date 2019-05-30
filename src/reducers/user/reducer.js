import {ActionType} from '../../actions/user/action';

const initialState = {
  isAuthorizationRequired: false,
  authFailed: false,
  favorites: [],
  profile: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case ActionType.SET_PROFILE: return Object.assign({}, state, {
      profile: action.payload
    });
    case ActionType.SET_AUTH_FAILED: return Object.assign({}, state, {
      authFailed: action.payload
    });
  }

  return state;
};
