import { LOGOUT, SET_AUTH_TOKEN } from './actions';

const initialState = {
  isAuthenticated: !!sessionStorage.getItem('token'),
  username: sessionStorage.getItem('username')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, ...{ isAuthenticated: true } };
    case LOGOUT:
      return { ...state, ...{ isAuthenticated: false } };
    default:
      return state;
  }
};