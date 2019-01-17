import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reducer from './reducer'
import syncSagas from './sagas'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddle = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),
  applyMiddleware(sagaMiddleware, routeMiddle)
)

sagaMiddleware.run(syncSagas)
