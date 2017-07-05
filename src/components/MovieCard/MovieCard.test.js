import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import mock from '../../mock/movies.json'
import { mount } from 'enzyme'
import MovieCard from './MovieCard'

const movie = mock[0]

describe('MovieCard component', () => {
  it('renders', () => {
    const props = {
      movie,
      showLabel: true,
    }

    mount(
      <MemoryRouter>
        <MovieCard {...props} />
      </MemoryRouter>
    )
  })
})
