import { get, post } from '../utils/axios.js';

export const getMember = (memberId) => {
  const url = `/members/${memberId}`;

  return get(url).then((response) => response.data);
};

export const inviteMember = (memberId, emails) => {
  const url = `/members/${memberId}/invite`;
  const data = {
    emails,
  };

  return post(url, data).then((response) => response.data);
};
