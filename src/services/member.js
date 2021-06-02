import { get } from '../utils/axios.js';

export const getMember = (memberId) => {
  const url = `/members/${memberId}`;

  return get(url).then((response) => response.data);
};
