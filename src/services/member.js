import { get, post } from '../utils/axios.js';

export const getMember = (memberId) => {
  const url = `/members/${memberId}`;

  return get(url).then((response) => response.data);
};

export const inviteMember = (memberId, inviter, emails) => {
  const url = `/members/${memberId}/invite`;
  const data = {
    emails,
    inviter,
  };

  return post(url, data).then((response) => response.data);
};

export const resetPassword = (email) => {
  const url = `/members/password`;
  const data = { email };

  return post(url, data).then((response) => response.data);
};
