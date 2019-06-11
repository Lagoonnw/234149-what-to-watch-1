import {APIEndpoints} from '../../constants/constants';
import {createAction} from '../../helpers/create-action/create-action';
import {convertObjectKeysToCamel} from '../../helpers/convert-object-keys-to-camel-case/convert-object-keys-to-camel-case';

export const ActionType = {
  SORT_MOVIES: `SORT_MOVIES`,
  RESET_MOVIES: `RESET_MOVIES`,
  SET_MOVIES: `SET_MOVIES`,
  SET_REVIEWS: `SET_REVIEWS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CLEAR_REVIEWS: `CLEAR_REVIEWS`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  SET_PROMO_MOVIE: `SET_PROMO_MOVIE`,
  ADD_REVIEW: `ADD_REVIEW`
};

export const moviesAction = {
  sortMovies: (activeFiler) => createAction(ActionType.SORT_MOVIES, activeFiler),
  resetMovies: () => createAction(ActionType.RESET_MOVIES),
  setMovies: (films) => createAction(ActionType.SET_MOVIES, films),
  setPromoMovie: (movie) => createAction(ActionType.SET_PROMO_MOVIE, movie),
  setReviews: (reviews) => createAction(ActionType.SET_REVIEWS, reviews),
  clearReviews: () => createAction(ActionType.CLEAR_REVIEWS),
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(APIEndpoints.FILMS)
      .then((response) => {
        dispatch(moviesAction.setMovies(response.data.map((movie) => convertObjectKeysToCamel(movie))));
      });
  },
  loadReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`${APIEndpoints.REVIEWS}${id}`)
      .then((response) => {
        dispatch(moviesAction.setReviews(response.data.map((review) => convertObjectKeysToCamel(review))));
      });
  },
  loadPromoMovie: () => (dispatch, _getState, api) => {
    return api.get(APIEndpoints.PROMO)
      .then((response) => {
        dispatch(moviesAction.setPromoMovie(convertObjectKeysToCamel(response.data)));
      });
  },
  addReview: (id, data) => (dispatch, _getState, api) => {
    return api.post(`${APIEndpoints.REVIEWS}${id}`, data);
  }
};
