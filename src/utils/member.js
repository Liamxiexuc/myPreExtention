import { fetchMemberId } from './authentication.js';
import { fetchMember } from '../services/member.js';

export const fetchMemberData = async () => {
  const memberId = await fetchMemberId();
  console.log(memberId);
  const { data } = await fetchMember(memberId);
  return data;
};
