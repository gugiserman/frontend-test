import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { updateSearch, updateSearchParam } from '../../flux/actions'
import { connect } from 'react-redux'
import { getSearchOptions } from '../../utils'

class Search extends Component {
  handleParamChange = (event) => {
    const { dispatch } = this.props
    const { target: { value } } = event

    dispatch(
      updateSearchParam(value),
    )
  }

  handleChange = (event) => {
    const { dispatch } = this.props
    const { target: { value } } = event

    dispatch(
      updateSearch(value)
    )
  }

  render() {
    const { search, searchParam } = this.props
    const options = getSearchOptions()

    return (
      <section className="mb4">
        <select className="input-reset h3 ph2 absolute z-999 ba b--dark-gray br0 bg-near-black gray f7 tc pointer Search__param-select"
                value={searchParam} onChange={this.handleParamChange}>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          className="input-reset br1 h3 w-100 bn pa3 pl5 indent bg-dark-gray light-gray f7 f5-ns"
          type="text"
          placeholder="Search for titles, directors or actors..."
          value={search}
          onChange={this.handleChange}
        />
      </section>
    )
  }
}

Search.propTypes = {
  search: PropTypes.string,
  searchParam: PropTypes.string,
}

const mapStateToProps = ({ search, searchParam }) => ({
  search,
  searchParam,
})

export { Search }
export default connect(mapStateToProps)(Search)
