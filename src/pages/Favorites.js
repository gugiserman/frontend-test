import React, { Component } from 'react'
import { Favorites } from '../clients'
import { updateMovies } from '../flux/actions'
import { connect } from 'react-redux'

import {
  Page,
  Movies,
} from '../components'

class FavoritesPage extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    const favorites = Favorites.getMovies()

    dispatch(
      updateMovies(favorites)
    )
  }

  render() {
    const { movies } = this.props

    return (
      <Page>
        {movies.length > 0 ? (
          <h3 className="ph1 mb0">My Favorites</h3>
        ) : (
          <h2 className="tc mt5">You have no favorites yet :(</h2>
        )}
        <Movies />
      </Page>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

export { FavoritesPage }
export default connect(mapStateToProps)(FavoritesPage)
