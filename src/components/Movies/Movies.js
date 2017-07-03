import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../'
import { connect } from 'react-redux'

const Movies = ({ movies, showMoviesNotFound, showMoviesLoading }) => (
  <section className="mb2 mt3">
    {showMoviesLoading && (
      <h3 className="tc">loading...</h3>
    )}

    {showMoviesNotFound && (
      <h3 className="tc">No movies found :(</h3>
    )}

    {(!showMoviesLoading && !showMoviesNotFound) && movies.map(movie => (
      <article className="dib ph1 mb2 w-100 w-20-ns" key={movie.unit}>
        <MovieCard movie={movie} showLabel />
      </article>
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
