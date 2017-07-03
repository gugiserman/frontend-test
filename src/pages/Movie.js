import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NetflixRoulette, Favorites } from '../clients'
import { updateMovie } from '../flux/actions'
import { connect } from 'react-redux'

import {
  Page,
  MoviePoster,
} from '../components'

class MoviePage extends Component {
  handleToggleFavorite = () => {
    const { movie, dispatch } = this.props
    const { unit, isFavorite } = movie

    if (isFavorite) {
      Favorites.removeMovie(unit)
    } else {
      Favorites.addMovie(movie)
    }

    dispatch(
      updateMovie(movie)
    )
  }

  componentDidMount() {
    const { dispatch, match } = this.props
    const { params: { title } } = match
    const decodedTitle = decodeURIComponent(title)

    NetflixRoulette.fetchMovieByTitle(decodedTitle).then(movie =>
      dispatch(
        updateMovie(movie)
      )
    )
  }

  componentWillUnmount() {
    const { dispatch } = this.props

    dispatch(
      updateMovie()
    )
  }

  render() {
    const { movie } = this.props

    if (!movie || !movie.unit) {
      return (
        <Page>loading...</Page>
      )
    }

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
      isFavorite,
    } = movie

    return (
      <Page>
        <section className="mt4">
          <div className="w-third-ns tc fr-ns">
            <MoviePoster src={poster} title={show_title} />
          </div>
          <div className="w-two-thirds-ns pr4-ns">
            <h1 className="mb0 near-white">
              {show_title}
            </h1>
            <p className="mt2 gray">
              {rating} &#x2605;{' '}
              <small>&bull;</small>{' '}
              {release_year}{' '}
              <small>&bull;</small>{' '}
              {runtime}{' '}
              <small>&bull;</small>{' '}
              <button type="button" className="button-reset ph1 bg-transparent bn gray hover-near-white pointer f7"
                      onClick={this.handleToggleFavorite}>
                <span className={`${isFavorite ? 'dark-red hover-red' : ''}`}>
                  &hearts;{' '}
                </span>
                {isFavorite ? 'Remove' : 'Add'} favorite
              </button>
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
          </div>
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
