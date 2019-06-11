import {combineReducers} from 'redux';
import {reducer as movies} from './movies/reducer';
import {reducer as user} from './user/reducer';
import {reducer as player} from './player/reducer';
import {reducer as form} from './form/reducer';
import {NameSpaces} from './name-spaces';

export const reducer = combineReducers({
  [NameSpaces.MOVIES]: movies,
  [NameSpaces.USER]: user,
  [NameSpaces.PLAYER]: player,
  [NameSpaces.FORM]: form
});
