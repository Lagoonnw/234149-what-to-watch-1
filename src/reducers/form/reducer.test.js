import {reducer} from './reducer';
import {ActionType} from '../../actions/form/action';

const initialStateMock = {
  submitFailed: false
};

describe(`Form reducer test`, () => {
  test(`Should set to true submitFailed`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_SUBMIT_FAILED,
      payload: true
    })).toEqual({
      submitFailed: true
    });
  });
  test(`Should return initial state`, () => {
    expect(reducer({submitFailed: true}, {
      type: ActionType.RESET_FORM_ERROR,
      payload: true
    })).toEqual(initialStateMock);
  });
});
