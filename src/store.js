import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const initialState = {
  nodes: [],
  links: [],
}

const generateStore = () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      reducers,
      initialState,
      applyMiddleware(
        logger(),
        thunk,
      ),
    )
  }
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunk,
    ),
  )
}

export default generateStore
