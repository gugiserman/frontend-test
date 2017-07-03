import React from 'react'
import PropTypes from 'prop-types'
import { movieRuntimeValidated } from '../../utils'

const MovieCardLabel = ({ movie, isVisible }) => {
  if (!isVisible) {
    return null
  }

  const {
    show_title,
    release_year,
    runtime,
  } = movie

  const showRuntime = movieRuntimeValidated(runtime)

  return (
    <div className="absolute z-999 bottom-0 w-100 pa2 bg-black-60 hover-bg-black-80">
      <div className="tl">
        <h2 className="f6 light-gray hover-red ma0 mb1 mt1">
          {show_title}
        </h2>
        <span className="f7 moon-gray">
          {release_year}
          {showRuntime && (
            <span>
              {' '}&bull; {runtime}
            </span>
          )}
        </span>
      </div>
    </div>
  )
}

MovieCardLabel.propTypes = {
  movie: PropTypes.object,
  isVisible: PropTypes.bool,
}

MovieCardLabel.defaultProps = {
  isVisible: true,
}

export default MovieCardLabel
