import axios from 'axios';
import {API_BASE_URL} from "./constants/constants";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  return api;
};
