import { CREATE_STUDENT } from '../actions/students/create'
import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { DELETE_STUDENT } from '../actions/students/delete'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_STUDENTS :
     return [ ...payload ]

    case CREATE_STUDENT :
      return state.concat({ ...payload })

    case DELETE_STUDENT :
      return state.filter((student) => (student._id !== payload._id))

    default :
      return state
  }
}
