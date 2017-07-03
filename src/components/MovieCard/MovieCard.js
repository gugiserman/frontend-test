import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Img from 'react-image'
import { protocolAgnostic } from '../../utils'
import MovieCardLabel from './MovieCardLabel'

const MovieCard = ({ movie, showLabel }) => {
  const {
    show_title,
    poster,
  } = movie

  const encodedTitle = encodeURIComponent(show_title)
  const posterSources = [
    protocolAgnostic(poster),
    '//via.placeholder.com/284x398',
  ]

  return (
    <div className="relative dib tc nested-img">
      <Link className="link" to={encodedTitle}>
        <Img className="br1" src={posterSources} alt={show_title} width="284" />
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
