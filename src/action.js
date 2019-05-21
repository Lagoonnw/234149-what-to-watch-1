import {films} from "./mocks/films";

const createAction = (type, payload) => ({type, payload});

export const ActionCreator = {
  sortMovies: (activeFiler) => createAction(`SORT_MOVIES`, activeFiler),
  resetMovies: () => createAction(`RESET_MOVIES`),
  setMovies: () => createAction(`SET_MOVIES`, films)
};
