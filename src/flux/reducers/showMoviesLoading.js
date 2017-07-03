const initialState = false

const showMoviesLoading = (value = initialState, action) => {
  switch (action.type) {
    case 'START_MOVIES_LOADING':
      return action.value
    case 'STOP_MOVIES_LOADING':
      return action.value
    case 'UPDATE_MOVIES':
      return false
    default:
      return value
  }
}

export default showMoviesLoading
