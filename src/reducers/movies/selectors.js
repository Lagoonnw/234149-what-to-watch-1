import {createSelector} from 'reselect';
import {filterMovies} from '../../helpers/filter-movies/filter-movies';
import {GenreMap} from '../../constants/constants';
import {NameSpaces} from '../name-spaces';

export const getMovies = (state) => state[NameSpaces.MOVIES].movies;

export const getGenres = (state) => state[NameSpaces.MOVIES].genres;

export const getActiveGenre = (state) => state[NameSpaces.MOVIES].activeGenre;

export const getFilteredMovies = createSelector(
    getActiveGenre,
    getMovies,
    (genre, movies) => filterMovies(movies, GenreMap[genre])
);

export const getCurrentMovie = (state, id) => state[NameSpaces.MOVIES].movies.find((movie) => movie.id === id);
