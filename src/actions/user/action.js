import {createAction} from '../../helpers/create-action/create-action';
import {APIEndpoints} from '../../constants/constants';
import {convertObjectKeysToCamel} from '../../helpers/convert-object-keys-to-camel-case/convert-object-keys-to-camel-case';

export const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_PROFILE: `SET_PROFILE`,
  LOGIN: `LOGIN`,
  SET_AUTH_FAILED: `SET_AUTH_FAILED`,
  SET_FAVORITES: `SET_FAVORITES`,
  CHECK_AUTH: `CHECK_AUTH`
};

export const userAction = {
  setAuthStatus: (status) => createAction(ActionType.SET_AUTH_STATUS, status),
  setProfile: (profile) => createAction(ActionType.SET_PROFILE, profile),
  setAuthFailed: (status) => createAction(ActionType.SET_AUTH_FAILED, status),
  setFavoriteMovies: (movies) => createAction(ActionType.SET_FAVORITES, movies),
  login: (data) => (dispatch, _getState, api) => {
    return api.post(APIEndpoints.LOGIN, data)
    .then((response) => {
      dispatch(userAction.setProfile(convertObjectKeysToCamel(response.data)));
      dispatch(userAction.setAuthStatus(false));
    });
  },
  loadFavoriteMovies: () => (dispatch, _getState, api) => {
    return api.get(APIEndpoints.FAVORITE)
      .then((response) => {
        dispatch(userAction.setFavoriteMovies(response.data.map((movie) => convertObjectKeysToCamel(movie))));
      });
  },
  checkUserAuth: () => (dispatch, _getState, api) => {
    return api.get(APIEndpoints.LOGIN)
      .then((response) => {
        dispatch(userAction.setProfile(convertObjectKeysToCamel(response.data)));
        dispatch(userAction.setAuthStatus(false));
      });
  }
};
