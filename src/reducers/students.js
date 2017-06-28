import { CREATE_STUDENT } from '../actions/students/create'
import { FETCHED_STUDENTS } from '../actions/students/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_STUDENTS :
     return [ ...payload ]

    case CREATE_STUDENT :
      return state.concat({ ...payload })

    default :
      return state
  }
}
