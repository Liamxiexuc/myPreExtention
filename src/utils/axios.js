import axios from 'axios';

import { getToken } from './authentication.js';

/* axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://property-power.herokuapp.com/api/v1'
    : 'http://localhost:4000/api/v1';
 */
axios.defaults.baseURL =
  'https://property-power.herokuapp.com/api/v1';

const appendAuthToken = async (config) => {
  const jwtToken = await getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;

  return { ...config, headers: { Authorization, ...config.header } };
};

export const get = async (url, config = {}) =>
  axios.get(url, await appendAuthToken(config));

export const post = async (url, data, config = {}) =>
  axios.post(url, data, await appendAuthToken(config));

export const put = async (url, data, config = {}) =>
  axios.put(url, data, await appendAuthToken(config));

export const del = async (url, config = {}) =>
  axios.delete(url, await appendAuthToken(config));
