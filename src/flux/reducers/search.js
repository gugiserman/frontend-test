const initialState = ''

const search = (value = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.value
    case 'UPDATE_SEARCH_PARAM':
      return initialState
    default:
      return value
  }
}

export default search
