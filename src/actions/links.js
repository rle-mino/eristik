import { v4 } from 'uuid'

export const ADDED = 'LINKS_ADDED'
export const REMOVED = 'LINKS_REMOVED'
export const MOVED = 'LINKS_MOVED'

const added = payload => ({
  action: ADDED,
  payload,
})

const removed = id => ({
  action: REMOVED,
  payload: id,
})

const moved = ({ A, B, id }) => ({
  action: MOVED,
  payload: { A, B, id },
})

export const add = ({ A, B }) => (dispatch) => {
  dispatch(added({ A, B, id: v4() }))
}

export const remove = id => (dispatch) => {
  dispatch(removed(id))
}

export const move = ({ A, B, id }) => (dispatch) => {
  dispatch(moved({ A, B, id }))
}
