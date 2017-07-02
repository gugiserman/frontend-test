import React from 'react'
import PropTypes from 'prop-types'

import {
  Header,
} from '../'

const Page = ({ children }) => (
  <div className="ph3">
    <Header />
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Page
