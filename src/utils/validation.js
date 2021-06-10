import { isEmailValid, isPasswordValid } from './regex.js';

export const emailRules = {
  required: true,
  message: 'please input your email',
};
export const passwordRules = {
  required: true,
  message: 'please input your password',
};
export const passwordLengthRules = {
  validator: isPasswordValid,
  message: 'password should be at least 6 characters',
};
export const emailFormatRules = {
  validator: isEmailValid,
  message: 'invalid email format',
};
export const firstNameRules = {
  required: true,
  message: 'please input your first name',
};
export const lastNameRules = {
  required: true,
  message: 'please input your last name',
};
