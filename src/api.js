import axios           from 'axios';
import {API_BASE_URL}  from './constants/constants';
import {actionCreator} from './actions/user/action';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(actionCreator.setAuthStatus(false));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
