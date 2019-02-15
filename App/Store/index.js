import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import logger from 'redux-logger'

import restaurantsReducer from './reducers/restaurants'
import authReducer from './reducers/auth'

const reducer = combineReducers({
  restaurants: restaurantsReducer,
  auth: authReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store