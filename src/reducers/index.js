import {combineReducers} from 'redux';
import {reducer as data} from './data/reducer';
import {reducer as user} from './user/reducer';
import {NameSpaces} from './name-spaces';

export const reducer = combineReducers({
  [NameSpaces.DATA]: data,
  [NameSpaces.USER]: user
});
