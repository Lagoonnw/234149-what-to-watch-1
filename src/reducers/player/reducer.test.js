import {reducer} from './reducer';
import {ActionType} from '../../actions/player/action';

const initialStateMock = {
  isPlayerOn: false,
  movieId: null
};

describe(`Player reducer state`, () => {
  test(`Should set isPlayerOn flag and put movieId to store`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.PLAY,
      payload: 56
    })).toEqual({
      isPlayerOn: true,
      movieId: 56
    });
  });
  test(`Should return initialState`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.STOP
    })).toEqual(initialStateMock);
  });
});
