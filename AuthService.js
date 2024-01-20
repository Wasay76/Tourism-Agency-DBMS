// AuthService.js
const hardcodedUsername = 'wasay.adil@ryerson.ca';
const hardcodedPassword = 'Gogeta44$';

export const login = (username, password) => {
  if (username === hardcodedUsername && password === hardcodedPassword) {
    // Successful login
    return true;
  } else {
    // Failed login
    return false;
  }
};