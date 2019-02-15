import axios from 'axios';

//action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//action creators 
const login = user => {
  type: LOGIN,
  user
}

export const logout = () => {
  type: LOGOUT
}

//thunk creators
export const verfyCredentials = userInput => {
  return dispatch => {

  }
}

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN: 
      return action.user;
    case LOGOUT:
      return {};
    default: 
      return {};
  }
}

export default authReducer