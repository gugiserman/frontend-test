import mock from '../../mock/movies.json'

// const initialState = []
const initialState = mock

const movies = (list = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MOVIES':
      return action.list
    default:
      return list
  }
}

export default movies
