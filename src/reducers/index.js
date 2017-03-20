import { combineReducers } from 'redux'
import nodes from './nodes'
import links from './links'

export default combineReducers({
  nodes,
  links,
})
