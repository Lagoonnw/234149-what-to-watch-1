import axios from 'axios';
import {API_BASE_URL} from './constants/constants';
import {userAction} from './actions/user/action';
import {formAction} from './actions/form/action';
import {ResponseStatus} from './constants/constants';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === ResponseStatus.FORBIDDEN) {
      dispatch(userAction.setAuthStatus(true));
    }
    if (err.response.status === ResponseStatus.BAD_REQUEST) {
      dispatch(formAction.setSubmitFailed(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
