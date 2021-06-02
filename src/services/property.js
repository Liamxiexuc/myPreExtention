import { post } from '../utils/axios.js';

export const addProperty = (payload) => {
  const url = '/properties';

  return post(url, payload).then((response) => response.data);
};
