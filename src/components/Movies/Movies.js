import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../'
import { connect } from 'react-redux'

const Movies = ({ movies }) => (
  <section className="mt2 mb2 mt3-ns">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.unit} />
    ))}
  </section>
)

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

export { Movies }
export default connect(mapStateToProps)(Movies)
