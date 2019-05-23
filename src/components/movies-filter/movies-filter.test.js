import React from 'react';
import renderer from 'react-test-renderer';
import {genresList} from '../../constants/constants';
import {MoviesFilter} from './movies-filter.jsx';

describe(`Movies filter render`, ()=> {
  test(`Should render movies filter correctly`, () => {
    const tree = renderer.create(
        <MoviesFilter
          genresList={Array.from(genresList)}
          sortMovies={() => jest.fn()}
          resetMovies={() => jest.fn()}
          onClick={() => jest.fn()}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
