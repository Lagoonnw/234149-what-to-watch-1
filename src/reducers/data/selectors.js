import {createSelector} from 'reselect';
import {filterMovies} from '../../helpers/filter-movies/filter-movies';
import {GenreMap} from '../../constants/constants';
import {NameSpaces} from '../name-spaces';

export const getMovies = (state) => state[NameSpaces.DATA].movies;

export const getGenres = (state) => state[NameSpaces.DATA].genres;

export const getActiveGenre = (state) => state[NameSpaces.DATA].activeGenre;

export const getFilteredMovies = createSelector(
    getActiveGenre,
    getMovies,
    (genre, movies) => filterMovies(movies, GenreMap[genre])
);
