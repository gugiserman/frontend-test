import React from 'react'
import mock from '../../mock/movies.json'
import { shallow } from 'enzyme'
import MovieCard from './MovieCard'

const movie = mock[0]

describe('MovieCard component', () => {
  it('renders', () => {
    const props = movie

    shallow(
      <MovieCard {...props} />
    )
  })
})
