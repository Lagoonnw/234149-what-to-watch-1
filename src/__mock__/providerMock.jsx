import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {genresList} from '../constants/constants';
import PropTypes from 'prop-types';
import {MemoryRouter} from 'react-router-dom';

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn().movies,
    backgroundColor: `#F5F5F5`
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 545468787,
    name: `The Witcher`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  }
];
const initialStateMock = {
  movies: {
    activeGenre: null,
    movies: mock,
    genres: Array.from(genresList),
    promoMovie: {}
  },
  user: {
    isAuthorized: false
  },
  form: {
    submitFailed: false
  },
  player: {
    movieId: null,
    isPlayerOn: false
  }
};
const reducer = (state = initialStateMock) => state;
const store = createStore(reducer);

export const ProviderMock = ({children}) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[`/`]}>
      { children }
    </MemoryRouter>
  </Provider>
);

ProviderMock.propTypes = {
  children: PropTypes.object
};
