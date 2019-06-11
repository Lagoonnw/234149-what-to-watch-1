import {ActionType} from '../../actions/form/action';

const initialState = {
  submitFailed: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SUBMIT_FAILED:
      return Object.assign({}, state, {
        submitFailed: action.payload
      });
    case ActionType.RESET_FORM_ERROR:
      return Object.assign({}, state, initialState);
  }

  return state;
};
