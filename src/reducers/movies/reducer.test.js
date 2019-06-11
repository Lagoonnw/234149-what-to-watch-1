import {genresList} from '../../constants/constants';
import {reducer} from './reducer';
import {ActionType} from '../../actions/movies/action';

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
const reviewsMock = [{
  id: 1,
  comment: `This movie is awesome`,
  user: {id: 4, name: `Sam`},
  rating: 8.5,
  date: `2019-06-08T13:25:17.586Z`
}];
const initialStateMock = {
  activeGenre: null,
  movies: [],
  reviews: [],
  genres,
  promoMovie: {}
};

describe(`Data reducer works correctly`, () => {
  test(`Should set movies and sorted movies`, () => {
    const action = {
      type: ActionType.SET_MOVIES,
      payload: filmsMock
    };
    expect(reducer(initialStateMock, action)).toEqual({
      activeGenre: null,
      movies: filmsMock,
      genres: initialStateMock.genres,
      reviews: [],
      promoMovie: {}
    });
  });

  test(`Should sort movies`, () => {
    const state = {
      genres,
      activeGenre: null,
      movies: filmsMock,
      reviews: [],
      promoMovie: {}
    };
    const action = {
      type: ActionType.SORT_MOVIES,
      payload: `Horror`
    };
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: `Horror`,
      movies: filmsMock,
      reviews: [],
      promoMovie: {}
    });
  });

  test(`Should reset active filter`, () => {
    const state = {
      genres,
      activeGenre: `Horror`,
      movies: filmsMock,
      reviews: [],
      promoMovie: {}
    };
    const action = {type: ActionType.RESET_MOVIES};
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: null,
      movies: filmsMock,
      reviews: [],
      promoMovie: {}
    });
  });

  test(`Should set reviews`, () => {
    const state = {
      genres,
      activeGenre: null,
      movies: [],
      reviews: [],
      promoMovie: {}
    };
    const action = {type: ActionType.SET_REVIEWS, payload: reviewsMock};
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: state.activeGenre,
      movies: state.movies,
      reviews: reviewsMock,
      promoMovie: {}
    });
  });

  test(`Should clear reviews`, () => {
    const state = {
      genres,
      activeGenre: null,
      movies: [],
      reviews: reviewsMock,
      promoMovie: {}
    };
    const action = {type: ActionType.CLEAR_REVIEWS};
    expect(reducer(state, action)).toEqual({
      genres,
      activeGenre: state.activeGenre,
      movies: state.movies,
      reviews: [],
      promoMovie: {}
    });
  });

  test(`Should set Promo movie`, () => {
    const state = {
      genres,
      activeGenre: null,
      movies: [],
      reviews: reviewsMock,
      promoMovie: {}
    };
    expect(reducer(state, {
      type: ActionType.SET_PROMO_MOVIE,
      payload: {id: 4}
    })).toEqual({
      genres,
      activeGenre: null,
      movies: [],
      reviews: reviewsMock,
      promoMovie: {id: 4}
    });
  });
});
