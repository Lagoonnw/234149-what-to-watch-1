import {NameSpaces} from '../name-spaces';

export const getAuthState = (state) => state[NameSpaces.USER].isAuthorizationRequired;
