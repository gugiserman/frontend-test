import mock from '../../mock/movies.json'
import updateMovie from './updateMovie'

describe('updateMovie action', () => {
  it('creates an action to update the current movie displayed', () => {
    const data = mock[0]
    const action = updateMovie(data)

    const expectedAction = {
      data,
      type: 'UPDATE_MOVIE',
    }

    expect(action).toEqual(expectedAction)
  })
})
