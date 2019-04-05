export const LOGOUT = 'LOGOUT';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const setAuthToken = ({ username }) => {
  const token = btoa(username);
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('username', username);

  return {
    type: SET_AUTH_TOKEN,
    token
  };
};

export const logout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('username');

  return { type: LOGOUT };
};