import {addFavoriteMovie} from './add-favorite-movie';
import {films}            from '../../__mock__/films';

const mockItem = {
  id: 44,
  name: `Movie`
};

describe(`Add Favorite Movie helper test`, () => {
  test(`Should return new array with added item`, () => {
    const expectedLength = films.length + 1;
    expect(addFavoriteMovie(mockItem, films)).toHaveLength(expectedLength);
  });
  test(`Should return new array with added item when source array is not provided`, () => {
    const expectedLength = 1;
    expect(addFavoriteMovie(mockItem)).toHaveLength(expectedLength);
  });
  test(`Should throw error when the movies argument is not an array`, () => {
    expect(() => addFavoriteMovie(mockItem, {})).toThrow(`Movies should be an array`);
  });
});
