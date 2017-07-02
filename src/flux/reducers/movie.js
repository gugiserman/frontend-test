import mock from '../../mock/movies.json'

// const initialState = {}
const initialState = mock[0]

const movie = (data = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MOVIE':
      return action.data
    default:
      return data
  }
}

export default movie
