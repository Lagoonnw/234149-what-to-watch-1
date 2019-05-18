import {genresList} from "./constants/constants";
import {GenreMap} from "./constants/constants";

const initialState = {
  activeGenre: null,
  movies: [],
  sortedMovies: [],
  genres: Array.from(genresList)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SORT_MOVIES`:
      return Object.assign({}, state, {
        activeGenre: action.payload,
        sortedMovies: state.movies.filter((movie) => movie.genre === GenreMap[action.payload])
      });
    case `SET_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload,
        sortedMovies: action.payload
      });
    case `RESET_MOVIES`:
      return Object.assign({}, state, {
        activeGenre: null,
        sortedMovies: state.movies
      });
  }

  return state;
};
