const initialState = ''

const search = (value = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.value
    default:
      return value
  }
}

export default search
