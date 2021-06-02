import { fetchMemberId } from './authentication.js';
import { fetchMember } from '../services/member.js';

export const fetchMemberData = async () => {
  const memberId = await fetchMemberId();
  const { data } = await fetchMember(memberId);
  return data;
};
