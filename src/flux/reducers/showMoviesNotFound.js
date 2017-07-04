const initialState = false

const showMoviesNotFound = (value = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MOVIES_NOT_FOUND':
      return action.value
    case 'START_MOVIES_LOADING':
    case 'UPDATE_MOVIES':
      return false
    default:
      return value
  }
}

export default showMoviesNotFound
