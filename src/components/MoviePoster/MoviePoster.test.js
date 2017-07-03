import React from 'react'
import mock from '../../mock/movies.json'
import { shallow } from 'enzyme'
import MoviePoster from './MoviePoster'

const movie = mock[0]

describe('MoviePoster component', () => {
  it('renders', () => {
    const { poster, show_title } = movie

    const props = {
      src: poster,
      title: show_title,
    }

    shallow(
      <MoviePoster {...props} />
    )
  })
})
