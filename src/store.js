import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import match from './app/reducers/matchReducer'
import user from './app/reducers/userReducer'

export default createStore(
    combineReducers({ match, user }),
    {},
    applyMiddleware(logger)
)