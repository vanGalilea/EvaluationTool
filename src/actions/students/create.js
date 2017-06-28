import API from '../../api'
import { history } from '../../store'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new API()

export default (newStudent) => {
  return (dispatch) => {

  dispatch({ type: APP_LOADING })

   const backend = api.service('students')

   backend.create(newStudent)
     .then((result) => {
       dispatch({ type: LOAD_SUCCESS })
       dispatch({ type: APP_DONE_LOADING })

       dispatch({
         type: CREATE_STUDENT,
         payload: result
       })
       history.replace(`/batches/${newStudent.batchNum}`)
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
