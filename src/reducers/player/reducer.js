import {ActionType} from '../../actions/player/action';

const initialState = {
  isPlaying: false,
  movieId: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PLAY:
      return Object.assign({}, state, {
        isPlaying: true,
        movieId: action.payload
      });
    case ActionType.STOP:
      return Object.assign({}, state, initialState);
  }

  return state;
};
