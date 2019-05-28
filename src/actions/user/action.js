import {createAction} from '../../helpers/create-action/create-action';

export const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
};

export const ActionCreator = {
  setAuthStatus: (status) => createAction(ActionType.SET_AUTH_STATUS, status),
};
