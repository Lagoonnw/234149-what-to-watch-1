import {genresList} from '../../constants/constants';
import {ActionType} from '../../actions/data/action';

const initialState = {
  activeGenre: null,
  movies: [],
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
    case ActionType.RESET_MOVIES:
      return Object.assign({}, state, {
        activeGenre: null
      });
  }

  return state;
};
