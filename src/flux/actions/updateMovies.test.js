import mock from '../../mock/movies.json'
import updateMovies from './updateMovies'

describe('updateMovies action', () => {
  it('creates an action to update the current movies list', () => {
    const list = mock
    const action = updateMovies(list)

    const expectedAction = {
      list,
      type: 'UPDATE_MOVIES',
    }

    expect(action).toEqual(expectedAction)
  })
})
