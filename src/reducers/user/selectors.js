import {NameSpaces} from '../name-spaces';

export const getAuthStatus = (state) => state[NameSpaces.USER].isAuthorizationRequired;
export const getUserProfile = (state) => state[NameSpaces.USER].profile;
export const getAuthFailedStatus = (state) => state[NameSpaces.USER].authFailed;
