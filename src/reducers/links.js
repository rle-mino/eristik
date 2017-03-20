import { ADDED, REMOVED, MOVED } from '../actions'

const moveLink = (state, payload) => state.map((link) => {
  if (link.id === payload.id) {
    return { ...link, A: payload.A, B: payload.B }
  }
  return link
})

const links = (state = [], action) => {
  switch (action.type) {
    case ADDED:
      return [...state, action.payload]
    case REMOVED:
      return state.filter(link => link.id !== action.payload)
    case MOVED:
      return moveLink(state, action.payload)
    default:
      return state
  }
}

export default links
