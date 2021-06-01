import { isEmailValid } from './regex.js';

export const emailRules = {
  required: true,
  message: 'please input ur email',
};
export const passwordRules = {
  required: true,
  message: 'please input ur password',
};
export const regexRules = {
  validator: isEmailValid,
  message: 'invalid email format',
};
