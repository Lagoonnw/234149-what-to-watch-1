import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {genresList} from '../constants/constants';
import PropTypes from 'prop-types';

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 545468787,
    name: `The Witcher`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  }
];
const initialStateMock = {
  activeGenre: null,
  movies: mock,
  sortedMovies: mock,
  genres: Array.from(genresList)
};
const reducer = (state = initialStateMock) => state;
const store = createStore(reducer);

export const ProviderMock = ({children}) => <Provider store={store}>{children}</Provider>;

ProviderMock.propTypes = {
  children: PropTypes.object
};
