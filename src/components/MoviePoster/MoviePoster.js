import React from 'react'
import PropTypes from 'prop-types'
import Img from 'react-image'
import { protocolAgnostic } from '../../utils'

const MoviePoster = ({ src, title }) => {
  const posterSource = protocolAgnostic(src)

  return (
    <article>
      <Img className="br3 shadow-2" src={posterSource} alt={title} />
    </article>
  )
}

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MoviePoster
