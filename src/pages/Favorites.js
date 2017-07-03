import React, { Component } from 'react'
import { Favorites } from '../clients'
import { updateMovies } from '../flux/actions'
import { connect } from 'react-redux'

import {
  Page,
  Movies,
} from '../components'

class FavoritesPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const favorites = Favorites.getMovies()

    dispatch(
      updateMovies(favorites)
    )
  }

  render() {
    return (
      <Page>
        <h3>My Favorites</h3>
        <Movies />
      </Page>
    )
  }
}

export { FavoritesPage }
export default connect()(FavoritesPage)
