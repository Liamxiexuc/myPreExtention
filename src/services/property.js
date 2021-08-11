import { post, get } from '../utils/axios.js';

export const addProperty = (payload) => {
  const url = '/properties';

  return post(url, payload).then((response) => response.data);
};

export const requestGetProperty = (payload) => {
  const url = '/properties';

  const config = {
    params: {
      ...payload,
    },
  };

  return get(url, config).then((response) => response.data.data);
};
