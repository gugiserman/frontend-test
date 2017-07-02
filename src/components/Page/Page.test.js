import React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'

describe('Page wrapper component', () => {
  it('renders', () => {
    const props = {
      children: [],
    }

    shallow(
      <Page {...props} />
    )
  })
})
