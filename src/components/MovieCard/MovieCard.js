import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MovieCardLabel from './MovieCardLabel'

const MovieCard = ({ movie, showLabel }) => {
  const {
    show_title,
    poster,
  } = movie

  const encodedTitle = encodeURIComponent(show_title)

  return (
    <div className="relative dib tc nested-img">
      <Link className="link" to={encodedTitle}>
        <img className="br1" src={poster} alt={show_title} />
        <MovieCardLabel movie={movie} isVisible={showLabel} />
      </Link>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showLabel: PropTypes.bool,
}

export default MovieCard
