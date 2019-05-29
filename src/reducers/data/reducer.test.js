import {genresList} from '../../constants/constants';
import {reducer} from './reducer';
import {actionType} from '../../actions/data/action';

const genres = Array.from(genresList);
const filmsMock = [
  {
    id: 45454,
    name: `Seven`,
    poster: `pic.jpg`,
    genre: `thriller`,
    src: `video.mp4`
  },
  {
    id: 45566,
    name: `Lady with a dragon tattoo`,
    poster: `pic.jpg`,
    genre: `horror`,
    src: `video.mp4`
  }
];
const initialStateMock = {
  activeGenre: null,
  movies: [],
  genres
};

describe(`Data reducer works correctly`, () => {
  test(`Should set movies and sorted movies`, () => {
    const action = {
      type: actionType.SET_MOVIES,
      payload: filmsMock
    };
    expect(reducer(initialStateMock, action)).toEqual({
      activeGenre: null,
      movies: filmsMock,
      genres: initialStateMock.genres
    });
  });

  test(`Should sort movies`, () => {
    const state = {
      genres,
      activeGenre: null,
      movies: filmsMock,
    };
    const action = {
      type: actionType.SORT_MOVIES,
      payload: `Horror`
    };
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: `Horror`,
      movies: filmsMock
    });
  });

  test(`Should reset active filter`, () => {
    const state = {
      genres,
      activeGenre: `Horror`,
      movies: filmsMock,
    };
    const action = {type: actionType.RESET_MOVIES};
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: null,
      movies: filmsMock,
    });
  });
});
