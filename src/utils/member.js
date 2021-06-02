import { fetchMemberId } from './authentication.js';
import { getMember } from '../services/member.js';

export const fetchMemberData = async () => {
  const memberId = await fetchMemberId();
  const { data } = await getMember(memberId);
  return data;
};
