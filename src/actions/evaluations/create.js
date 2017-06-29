import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const EVALUATE_STUDENT = 'EVALUATE_STUDENT'

const api = new API()

export default (evaluation, studentId) => {

  return (dispatch) => {

  dispatch({ type: APP_LOADING })

   const backend = api.service('students')
   console.log(evaluation)
   backend.patch(studentId, evaluation)
     .then((result) => {
       dispatch({ type: LOAD_SUCCESS })
       dispatch({ type: APP_DONE_LOADING })

       dispatch({
         type: EVALUATE_STUDENT,
         payload: result
       })
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
