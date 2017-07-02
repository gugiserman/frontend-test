import React from 'react'
import PropTypes from 'prop-types'

const MoviePoster = ({ src, title }) => (
  <article className="shadow-2">
    <img className="br2" src={src} alt={title} />
  </article>
)

MoviePoster.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MoviePoster