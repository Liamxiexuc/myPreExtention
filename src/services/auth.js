import { post } from '../utils/axios.js';

export const login = (email, password) => {
  const url = '/auth';
  const data = {
    email,
    password,
  };
  return post(url, data).then((response) => response.data.token);
};

export const signup = (payload) => {
  const url = '/users';
  return post(url, payload);
};
