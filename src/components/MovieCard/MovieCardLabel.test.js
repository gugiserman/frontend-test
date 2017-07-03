import React from 'react'
import mock from '../../mock/movies.json'
import { mount } from 'enzyme'
import MovieCardLabel from './MovieCardLabel'

const movie = mock[0]

describe('MovieCard component', () => {
  it('renders', () => {
    const props = {
      movie,
      showLabel: true,
    }

    mount(
      <MovieCardLabel {...props} />
    )
  })
})
