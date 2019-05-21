import {filterMovies} from '../filterMovies';
import {films} from '../../mocks/films';

describe(`Filter movies helper test`, () => {
  test(`Should return same array if filter is null or undefined`, () => {
    expect(filterMovies(films, null)).toEqual(films);
    expect(filterMovies(films)).toEqual(films);
  });
  test(`Should filter movies with filter`, () => {
    expect(filterMovies(films, `thriller`)).toHaveLength(1);
  });
});

