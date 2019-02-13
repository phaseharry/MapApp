import axios from "axios";
import { State } from "react-native-gesture-handler";

//action types
const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";

//action creators 
const loadRestaurants = restaurants => ({
    type: LOAD_RESTAURANTS,
    restaurants
});

//thunks
export const initialFetch = () => {
  return dispatch => {

  }
};

const initialState = [];

const restaurantsReducer = (initialState, action) => {
  switch(action.type){
    case LOAD_RESTAURANTS:
      return [...action.restaurants];
    default:
      return State;
  }
}

export default restaurantsReducer;