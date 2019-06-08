import {createSelector} from 'reselect';
import {filterMovies} from '../../helpers/filter-movies/filter-movies';
import {GenreMap, MORE_LIKE_THIS_NUMBER} from '../../constants/constants';
import {NameSpaces} from '../name-spaces';
import {sortArray} from '../../helpers/sort-array/sort-array';

export const getMovies = (state) => state[NameSpaces.MOVIES].movies;

export const getGenres = (state) => state[NameSpaces.MOVIES].genres;

export const getActiveGenre = (state) => state[NameSpaces.MOVIES].activeGenre;

export const getReviews = (state) => state[NameSpaces.MOVIES].reviews;

export const getFilteredMovies = createSelector(
    getActiveGenre,
    getMovies,
    (genre, movies) => filterMovies(movies, GenreMap[genre])
);

export const getCurrentMovie = (state, id) => state[NameSpaces.MOVIES].movies.find((movie) => movie.id === id);

export const getSortedReviews = createSelector(
    getReviews,
    (reviews) => sortArray.byDate(reviews)
);

export const getMoreLikeThis = (state, genre, id) => {
  const movies = getMovies(state);
  return filterMovies(movies, genre).filter((movie) => movie.id !== id).splice(0, MORE_LIKE_THIS_NUMBER);
};

