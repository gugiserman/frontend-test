import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../'
import { connect } from 'react-redux'

const Movies = ({ movies, showMoviesLoading }) => (
  <section className="mt2 mb2 mt3-ns">
    {showMoviesLoading && (
      <h3 className="tc">loading...</h3>
    )}

    {!showMoviesLoading && movies.map(movie => (
      <MovieCard
        movie={movie}
        showLabel
        key={movie.unit}
      />
    ))}
  </section>
)

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  showMoviesLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ movies, showMoviesLoading }) => ({
  movies,
  showMoviesLoading,
})

export { Movies }
export default connect(mapStateToProps)(Movies)
