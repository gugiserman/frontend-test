import stopMoviesLoading from './stopMoviesLoading'

describe('stopMoviesLoading action', () => {
  it('creates an action to hide movies list loading feedback', () => {
    const action = stopMoviesLoading()

    const expectedAction = {
      value: false,
      type: 'STOP_MOVIES_LOADING',
    }

    expect(action).toEqual(expectedAction)
  })
})
