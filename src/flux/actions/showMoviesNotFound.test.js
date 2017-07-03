import showMoviesNotFound from './showMoviesNotFound'

describe('showMoviesNotFound action', () => {
  it('creates an action to show movies not found feedback', () => {
    const action = showMoviesNotFound()

    const expectedAction = {
      value: true,
      type: 'SHOW_MOVIES_NOT_FOUND',
    }

    expect(action).toEqual(expectedAction)
  })
})
