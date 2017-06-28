import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
 } from '../loading'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    dispatch({ type: LOAD_SUCCESS })
    const backend = api.service('students')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch({
        type: FETCHED_STUDENTS,
        payload: result.data
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
