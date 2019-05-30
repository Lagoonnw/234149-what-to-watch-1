import {combineReducers} from 'redux';
import {reducer as movies} from './movies/reducer';
import {reducer as user} from './user/reducer';
import {NameSpaces} from './name-spaces';

export const reducer = combineReducers({
  [NameSpaces.MOVIES]: movies,
  [NameSpaces.USER]: user
});
