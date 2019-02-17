import axios from "axios";

//action types
const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";

//action creators 
const loadRestaurants = restaurants => ({
    type: LOAD_RESTAURANTS,
    restaurants
});

//thunks creators
export const initialFetch = (potentialLangAndLongEnteredBasedOnGPSOrUserScrolling) => {
  return dispatch => {
    return axios.get('api key', {
      headers: {
        'user-key': 'ca0a264092d6bfffffe257412876cd4a'
      }
    })
    .then(res => res.data)
    .then(location => location.nearby_restaurants)
    .then(restaurants => dispatch(loadRestaurants(restaurants)))
    .catch(err => console.error(err))
  }
};

const initialState = [];

const restaurantsReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_RESTAURANTS:
      return [...action.restaurants]
    default:
      return state;
  }
}

export default restaurantsReducer;