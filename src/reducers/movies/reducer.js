import {genresList} from '../../constants/constants';
import {ActionType} from '../../actions/movies/action';

const initialState = {
  activeGenre: null,
  movies: [],
  reviews: [],
  promoMovie: {},
  genres: Array.from(genresList)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_MOVIES:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });
    case ActionType.SET_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload,
      });
    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.RESET_MOVIES:
      return Object.assign({}, state, {
        activeGenre: null
      });
    case ActionType.CLEAR_REVIEWS:
      return Object.assign({}, state, {
        reviews: []
      });
    case ActionType.SET_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: action.payload
      });
  }

  return state;
};
