import {NameSpaces} from '../name-spaces';

export const getAuthStatus = (state) => state[NameSpaces.USER].isAuthorizationRequired;
