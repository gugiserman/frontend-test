import React from 'react'
import { render } from 'react-dom'
import { Search } from './Search'

describe('Search component', () => {
  let container

  beforeAll(() => {
    container = document.createElement('div')
  })

  it('renders', () => {
    render(
      <Search />,
      container,
    )
  })
})
