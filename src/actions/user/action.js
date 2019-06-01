import {createAction} from '../../helpers/create-action/create-action';
import {APIEndpoints} from '../../constants/constants';
import {convertObjectKeysToCamel} from '../../helpers/convert-object-keys-to-camel-case/convert-object-keys-to-camel-case';

export const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_PROFILE: `SET_PROFILE`,
  LOGIN: `LOGIN`,
  SET_AUTH_FAILED: `SET_AUTH_FAILED`
};

export const userAction = {
  setAuthStatus: (status) => createAction(ActionType.SET_AUTH_STATUS, status),
  setProfile: (profile) => createAction(ActionType.SET_PROFILE, profile),
  setAuthFailed: (status) => createAction(ActionType.SET_AUTH_FAILED, status),
  login: (data) => (dispatch, _getState, api) => {
    return api.post(APIEndpoints.LOGIN, data)
    .then((response) => {
      dispatch(userAction.setProfile(convertObjectKeysToCamel(response.data)));
      dispatch(userAction.setAuthStatus(false));
    });
  }
};
