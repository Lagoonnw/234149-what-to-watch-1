import {NameSpaces} from '../name-spaces';

export const getFormError = (state) => state[NameSpaces.FORM].submitFailed;
