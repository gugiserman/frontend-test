const initialState = ''

const search = (search = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.value
    default:
      return search
  }
}

export default search
