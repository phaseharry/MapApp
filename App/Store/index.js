import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import logger from 'redux-logger'

import restaurantsReducer from './reducers/restaurants'

const reducer = combineReducers({
  restaurants: restaurantsReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store