export const LOGOUT = 'LOGOUT';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const setAuthToken = ({ username }) => {
  const token = btoa(username);
  localStorage.setItem('token', JSON.stringify(token));

  return {
    type: SET_AUTH_TOKEN,
    token
  };
}

export const logout = () => {
  localStorage.removeItem('token');

  return { type: LOGOUT };
}