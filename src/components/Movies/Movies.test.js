import React from 'react'
import { shallow } from 'enzyme'
import { Movies } from './Movies'

describe('Movies component', () => {
  it('renders', () => {
    const props = {
      movies: [],
    }

    shallow(
      <Movies {...props} />
    )
  })
})
