import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../'
import { connect } from 'react-redux'

const Movies = ({ movies, showMoviesNotFound, showMoviesLoading }) => (
  <section className="mt2 mb2 mt3-ns">
    {showMoviesLoading && (
      <h3 className="tc">loading...</h3>
    )}

    {showMoviesNotFound && (
      <h3 className="tc">No movies found :(</h3>
    )}

    {(!showMoviesLoading && !showMoviesNotFound) && movies.map(movie => (
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
  showMoviesNotFound: PropTypes.bool.isRequired,
  showMoviesLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ movies, showMoviesNotFound, showMoviesLoading }) => ({
  movies,
  showMoviesNotFound,
  showMoviesLoading,
})

export { Movies }
export default connect(mapStateToProps)(Movies)
