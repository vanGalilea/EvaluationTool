export default (state = false, { type } = {}) => {
  switch(type) {
    case 'APP_LOADING' :
      return true

    case 'APP_DONE_LOADING' :
      return false

    default :
      return state
  }
}
