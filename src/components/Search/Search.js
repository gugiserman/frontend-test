import React, { Component } from 'react'
import { updateSearch } from '../../flux/actions'
import { connect } from 'react-redux'

class Search extends Component {
  handleChange = (event) => {
    const { dispatch } = this.props
    const { target: { value } } = event

    return dispatch(
      updateSearch(value)
    )
  }

  render() {
    const { search } = this.props

    return (
      <section>
        <input
          className="br1 input-reset w-100 bn pa3 bg-dark-gray light-gray"
          type="text"
          placeholder="Search for titles, directors and/or actors..."
          value={search}
          onChange={this.handleChange}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
})

export { Search }
export default connect(mapStateToProps)(Search)
