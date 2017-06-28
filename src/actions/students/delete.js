import API from '../../api'
import { history } from '../../store'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const DELETE_STUDENT = 'DELETE_STUDENT'

const api = new API()

export default (student) => {
  return (dispatch) => {

  dispatch({ type: APP_LOADING })

   const backend = api.service('students')

   backend.remove(student._id)
     .then((result) => {
       dispatch({ type: LOAD_SUCCESS })
       dispatch({ type: APP_DONE_LOADING })

       dispatch({
         type: DELETE_STUDENT,
         payload: result
       })
       history.replace(`/batches/${student.batchNum}`)
     })
     .catch((error) => {
       dispatch({ type: APP_DONE_LOADING })
       dispatch({
         type: LOAD_ERROR,
         payload: error.message
       })
     })
  }
}
