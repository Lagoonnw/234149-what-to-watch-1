import {reducer} from './reducer';
import {ActionType} from '../../actions/user/action';

const initialStateMock = {
  isAuthorizationRequired: false,
  favorites: [],
  profile: null
};

describe(`User reducer should work correctly`, () => {
  test(`Should change user auth status to true/false`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: true
    })).toEqual({
      isAuthorizationRequired: true,
      authFailed: initialStateMock.authFailed,
      favorites: initialStateMock.favorites,
      profile: initialStateMock.profile
    });
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: false
    })).toEqual({
      isAuthorizationRequired: false,
      authFailed: initialStateMock.authFailed,
      favorites: initialStateMock.favorites,
      profile: initialStateMock.profile
    });
  });

  test(`Should set profile`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_PROFILE,
      payload: {name: `Sam`}
    })).toEqual({
      isAuthorizationRequired: false,
      authFailed: initialStateMock.authFailed,
      profile: {name: `Sam`},
      favorites: initialStateMock.favorites
    });
  });

  test(`Should set favorites`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_FAVORITES,
      payload: [{id: 1}, {id: 2}]
    })).toEqual({
      isAuthorizationRequired: initialStateMock.isAuthorizationRequired,
      authFailed: initialStateMock.authFailed,
      profile: initialStateMock.profile,
      favorites: [{id: 1}, {id: 2}]
    });
  });
});
