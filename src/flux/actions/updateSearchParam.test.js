import updateSearchParam from './updateSearchParam'

describe('updateSearchParam action', () => {
  it('creates an action to update the search param', () => {
    const value = 'director'
    const action = updateSearchParam(value)

    const expectedAction = {
      value,
      type: 'UPDATE_SEARCH_PARAM',
    }

    expect(action).toEqual(expectedAction)
  })
})
