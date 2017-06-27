import { CREATE_BATCH } from '../actions/batches/create'
import { FETCHED_BATCHES } from '../actions/batches/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_BATCHES :
     return [ ...payload ]

    case CREATE_BATCH :
      return state.concat({ ...payload })

    default :
      return state
  }
}
