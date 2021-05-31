import { post } from '../utils/axios.js';

export const login = (payload) => {
  const url = '/auth';
  return post(url, payload).then((response) => response.data.token);
};

export const signup = (payload) => {
  const url = '/users';
  return post(url, payload);
};
