export const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPasswordValid = (pwd) => {
  return pwd.length > 5;
};
