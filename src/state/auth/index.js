import { LOGOUT, SET_AUTH_TOKEN } from './actions';

const initialState = {
<<<<<<< HEAD
  isAuthenticated: !!sessionStorage.getItem('token')
=======
  isAuthenticated: !!sessionStorage.getItem('token'),
  username: sessionStorage.getItem('username')
>>>>>>> 7b633b1ddd16e242ef9335dc1597def61e6280ca
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