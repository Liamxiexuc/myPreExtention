import axios from 'axios';

import { getToken } from './authentication.js';

/* axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://property-power.herokuapp.com/api/v1'
    : 'http://localhost:4000/api/v1';
 */
axios.defaults.baseURL =
  'https://property-power.herokuapp.com/api/v1';

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;

  return { ...config, headers: { Authorization, ...config.header } };
};

export const get = (url, config = {}) =>
  axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) =>
  axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) =>
  axios.put(url, data, appendAuthToken(config));

export const del = (url, config = {}) =>
  axios.delete(url, appendAuthToken(config));
