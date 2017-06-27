import API from '../../api'
import { history } from '../../store'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATE_BATCH = 'CREATE_BATCH'

const api = new API()

export default (newBatch) => {
  return (dispatch) => {

  dispatch({ type: APP_LOADING })

   const backend = api.service('batches')

   backend.create(newBatch)
     .then((result) => {
       dispatch({ type: APP_DONE_LOADING })
       dispatch({ type: LOAD_SUCCESS })

       dispatch({
         type: CREATE_BATCH,
         payload: result
       })
       history.replace('/')
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
