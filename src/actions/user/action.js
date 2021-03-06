import {createAction} from '../../helpers/create-action/create-action';
import {APIEndpoints, FavoritesRequest} from '../../constants/constants';
import {convertObjectKeysToCamel} from '../../helpers/convert-object-keys-to-camel-case/convert-object-keys-to-camel-case';

export const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_PROFILE: `SET_PROFILE`,
  LOGIN: `LOGIN`,
  SET_FAVORITES: `SET_FAVORITES`,
  CHECK_AUTH: `CHECK_AUTH`,
  SAVE_TO_FAVORITE: `SAVE_TO_FAVORITE`
};

export const userAction = {
  setAuthStatus: (status) => createAction(ActionType.SET_AUTH_STATUS, status),
  setProfile: (profile) => createAction(ActionType.SET_PROFILE, profile),
  setFavoriteMovies: (movies) => createAction(ActionType.SET_FAVORITES, movies),
  login: (data) => (dispatch, _getState, api) => {
    return api.post(APIEndpoints.LOGIN, data)
    .then((response) => {
      if (response.data) {
        dispatch(userAction.setProfile(convertObjectKeysToCamel(response.data)));
        dispatch(userAction.setAuthStatus(false));
      }
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
        if (response.data) {
          dispatch(userAction.setProfile(convertObjectKeysToCamel(response.data)));
          dispatch(userAction.setAuthStatus(false));
        }
      })
      .catch(() => dispatch(userAction.setAuthStatus(true)));
  },
  saveMovieToFavorite: (id) => (dispatch, _getState, api) => {
    return api.post(`${APIEndpoints.FAVORITE}/${id}/${FavoritesRequest.ADD}`);
  }
};
