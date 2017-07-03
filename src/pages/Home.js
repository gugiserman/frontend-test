import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NetflixRoulette } from '../clients'
import { updateMovies } from '../flux/actions'
import debounce from 'debounce'

import {
  Page,
  Search,
  Movies,
} from '../components'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.debouncedFetchMovies = debounce(this.fetchMovies, 600)
  }

  fetchMovies() {
    const { search, searchParam, dispatch } = this.props

    const query = {
      [searchParam]: search,
    }

    NetflixRoulette.fetchMovies(query).then(movies =>
      dispatch(
        updateMovies(movies)
      )
    )
  }

  componentDidMount() {
    this.fetchMovies()
  }

  componentDidUpdate() {
    const { search } = this.props

    if (!search || !search.length) {
      this.fetchMovies()
    } else {
      this.debouncedFetchMovies()
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props

    dispatch(
      updateMovies()
    )
  }

  render() {
    return (
      <Page>
        <Search />
        <Movies />
      </Page>
    )
  }
}

const mapStateToProps = ({ search, searchParam }) => ({
  search,
  searchParam,
})

export { HomePage }
export default connect(mapStateToProps)(HomePage)
