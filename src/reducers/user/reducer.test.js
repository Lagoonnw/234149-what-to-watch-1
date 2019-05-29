import {reducer} from './reducer';
import {ActionType} from '../../actions/user/action';

const initialStateMock = {
  isAuthorized: false
};

describe(`User reducer should work correctly`, () => {
  test(`Should change user auth status to true/false`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: true
    })).toEqual({
      isAuthorized: true
    });
    expect(reducer(initialStateMock, {
      type: ActionType.SET_AUTH_STATUS,
      payload: false
    })).toEqual({
      isAuthorized: false
    });
  });
});
