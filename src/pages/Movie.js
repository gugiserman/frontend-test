import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Page,
  MoviePoster,
} from '../components'

class MoviePage extends Component {
  componentDidMount() {
  }

  render() {
    const { movie } = this.props

    if (!movie) {
      return (
        <Page>...</Page>
      )
    }

    console.log(movie)

    const {
      show_title,
      poster,
      rating,
      release_year,
      runtime,
      summary,
      show_cast,
      director,
      category,
    } = movie

    return (
      <Page>
        <section className="mt4">
          <div className="fr-ns">
            <MoviePoster src={poster} title={show_title} />
          </div>
          <h1 className="mb0 near-white">
            {show_title}
          </h1>
          <p className="mt2 gray">
            {rating} &#x2605;{' '}
            &bull;{' '}
            {release_year}{' '}
            &bull;{' '}
            {runtime}
          </p>
          <p className="pv3 f5 gray">
            {summary}
          </p>
          <p className="moon-gray f6 lh-copy">
            <span className="gray">
              Starring:{' '}
            </span>
            {show_cast}
          </p>
          <p className="moon-gray f6">
            <span className="gray">
              Director:{' '}
            </span>
            {director}
          </p>
          <p className="moon-gray f6">
            <span className="gray">
              Genres:{' '}
            </span>
            {category}
          </p>
        </section>
      </Page>
    )
  }
}

MoviePage.propTypes = {
  match: PropTypes.object,
  movie: PropTypes.object,
}

const mapStateToProps = ({ movie }) => ({
  movie,
})

export { MoviePage }
export default connect(mapStateToProps)(MoviePage)
