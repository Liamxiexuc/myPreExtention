import { fetchMemberId } from './authentication.js';
import { addProperty } from '../services/property.js';

export const sendProperty = async (payload) => {
  const memberId = await fetchMemberId();
  const lastViewedDate = new Date().toISOString();

  const newPayload = {
    ...payload,
    memberId,
    lastViewedDate,
  };
  const { data } = await addProperty(newPayload);

  return data;
};
