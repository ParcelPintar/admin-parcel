import { createStore, combineReducers, applyMiddleware } from 'redux'
import orders from './reducers/orders'
import logs from './reducers/logs'
import order from './reducers/order'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  orders,
  logs,
  order
})

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ (), applyMiddleware(thunk))

export default store
