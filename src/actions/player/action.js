import {createAction} from '../../helpers/create-action/create-action';

export const ActionType = {
  PLAY: `PLAY`,
  STOP: `STOP`
};

export const playerAction = {
  startPlay: (movieId) => createAction(ActionType.PLAY, movieId),
  exitPlayer: () => createAction(ActionType.STOP)
};
