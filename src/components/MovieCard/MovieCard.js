import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieCard = (movie) => {
  const {
    show_title,
    release_year,
    runtime,
    poster,
  } = movie

  return (
    <article className="relative dib w-50 w-20-ns mb1 ph1 tc">
      <Link className="link" to={show_title}>
        <div className="absolute dt bottom-0 w-100 ph2 pb2 bg-black-60 hover-bg-black-80">
          <div className="dtc v-mid tl">
            <h2 className="f6 light-gray hover-red mb1">
              {show_title}
            </h2>
            <span className="f7 moon-gray">
              {release_year} &bull; {runtime}
            </span>
          </div>
        </div>
        <img className="br1 w-100 h-100" src={poster} alt={show_title} />
      </Link>
    </article>
  )
}

MovieCard.propTypes = {
  show_title: PropTypes.string.isRequired,
  release_year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default MovieCard
