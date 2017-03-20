import { v4 } from 'uuid'

export const ADDED = 'NODES_ADDED'
export const MOVED = 'NODES_REMOVED'
export const REMOVED = 'NODES_REMOVED'
export const CHILDREN_ADDED = 'NODES_CHILDREN_ADDED'

const added = (title, x, y, id) => ({
  type: ADDED,
  payload: { title, x, y, id },
})

const moved = (id, x, y) => ({
  type: MOVED,
  payload: { x, y, id },
})

const removed = id => ({
  type: REMOVED,
  payload: id,
})

const childAdded = (id, nodeId) => ({
  type: CHILDREN_ADDED,
  payload: { id, nodeId },
})

export const add = ({ title, x, y }) => (dispatch) => {
  dispatch(added(title, x, y, v4()))
}

export const move = ({ id, x, y }) => (dispatch) => {
  dispatch(moved(id, x, y))
}

export const remove = ({ id }) => (dispatch) => {
  dispatch(removed(id))
}

export const addChild = ({ nodeId, child }) => (dispatch) => {
  dispatch(childAdded())
}
