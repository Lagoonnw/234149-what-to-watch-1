import {genresList} from '../../constants/constants';
import {actionType} from '../../actions/movies/action';

const initialState = {
  activeGenre: null,
  movies: [],
  genres: Array.from(genresList)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SORT_MOVIES:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });
    case actionType.SET_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload,
      });
    case actionType.RESET_MOVIES:
      return Object.assign({}, state, {
        activeGenre: null
      });
  }

  return state;
};
