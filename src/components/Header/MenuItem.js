import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

const MenuItem = ({ path, name, match }) => {
  const isActive = match.path === path

  return (
    <li className="dib ph2-ns">
      <Link to={path}
            className={`link normal b f5 pv3 ph2 ${isActive ? 'near-white' : 'gray'} hover-near-white`}>
        {name}
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(MenuItem)
