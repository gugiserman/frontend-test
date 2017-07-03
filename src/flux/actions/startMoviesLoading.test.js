import startMoviesLoading from './startMoviesLoading'

describe('startMoviesLoading action', () => {
  it('creates an action to show movies list loading feedback', () => {
    const action = startMoviesLoading()

    const expectedAction = {
      value: true,
      type: 'START_MOVIES_LOADING',
    }

    expect(action).toEqual(expectedAction)
  })
})
