import {reducer} from './reducer';
import {ActionType} from '../../actions/user/action';

const initialStateMock = {
  isAuthorizationRequired: false
};

describe(`User reducer should work correctly`, () => {
  test(`Should change user auth status to true/false`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: true
    })).toEqual({
      isAuthorizationRequired: true
    });
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: false
    })).toEqual({
      isAuthorizationRequired: false
    });
  });
});
