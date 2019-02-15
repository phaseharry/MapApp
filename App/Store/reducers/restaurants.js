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
    return axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=40.7831&lon=-73.9712', {
      headers: {
        'user-key': 'api key goes here'
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