import { isEmailValid } from './regex.js';

export const emailRules = {
  required: true,
  message: 'please input ur email',
};
export const passwordRules = {
  required: true,
  message: 'please input ur password',
};
export const emailFormatRules = {
  validator: isEmailValid,
  message: 'invalid email format',
};
export const firstNameRules = {
  required: true,
  message: 'please input ur first name',
};
export const lastNameRules = {
  required: true,
  message: 'please input ur last name',
};
