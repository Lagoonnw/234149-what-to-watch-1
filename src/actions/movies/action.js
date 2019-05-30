import {APIEndpoints} from '../../constants/constants';
import {createAction} from '../../helpers/create-action/create-action';
import {convertObjectKeysToCamel} from '../../helpers/convert-object-keys-to-camel-case/convert-object-keys-to-camel-case';

export const actionType = {
  SORT_MOVIES: `SORT_MOVIES`,
  RESET_MOVIES: `RESET_MOVIES`,
  SET_MOVIES: `SET_MOVIES`
};

export const moviesAction = {
  sortMovies: (activeFiler) => createAction(actionType.SORT_MOVIES, activeFiler),
  resetMovies: () => createAction(actionType.RESET_MOVIES),
  setMovies: (films) => createAction(actionType.SET_MOVIES, films),
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(APIEndpoints.FILMS)
      .then((response) => {
        dispatch(moviesAction.setMovies(response.data.map((movie) => convertObjectKeysToCamel(movie))));
      });
  }
};
