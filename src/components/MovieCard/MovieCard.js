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
  const [imgWidth, imgHeight] = [284, 398]
  const imgPlaceholder = `//via.placeholder.com/${imgWidth}x${imgHeight}`

  const imgLoaderPlaceholder = (
    <div style={{
      width: `${imgWidth}px`,
      minHeight: `${imgHeight / 2}px`,
    }} />
  )

  const posterSources = [
    protocolAgnostic(poster),
    imgPlaceholder,
  ]

  return (
    <div className="relative dib tc nested-img">
      <Link className="link" to={encodedTitle}>
        <Img
          className="br1"
          src={posterSources}
          loader={imgLoaderPlaceholder}
          alt={show_title}
          width={imgWidth}
        />
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
