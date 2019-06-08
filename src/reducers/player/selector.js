import {NameSpaces} from '../name-spaces';
import {getMovies} from "../movies/selectors";
import {createSelector} from 'reselect';

export const getMovieId = (state) => state[NameSpaces.PLAYER].movieId;

export const getPlayingStatus = (state) => state[NameSpaces.PLAYER].isPlayerOn;

export const getMovie = createSelector(
    getMovies,
    getMovieId,
    (movies, id) => movies.find((movie) => movie.id === id)
);

