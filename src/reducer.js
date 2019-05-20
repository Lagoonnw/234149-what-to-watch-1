import {genresList} from "./constants/constants";

const initialState = {
  activeGenre: null,
  movies: [],
  genres: Array.from(genresList)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SORT_MOVIES`:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });
    case `SET_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload,
      });
    case `RESET_MOVIES`:
      return Object.assign({}, state, {
        activeGenre: null
      });
  }

  return state;
};
