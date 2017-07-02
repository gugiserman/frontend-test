import updateSearch from './updateSearch'

describe('updateSearch action', () => {
  it('creates an action to update the search term', () => {
    const value = 'test'
    const action = updateSearch(value)

    const expectedAction = {
      value,
      type: 'UPDATE_SEARCH',
    }

    expect(action).toEqual(expectedAction)
  })
})
