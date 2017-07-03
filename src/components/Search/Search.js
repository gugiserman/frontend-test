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
      <section>
        <select className="input-reset h3 absolute z-999 ba b--dark-gray br0 ph3 ph4-ns bg-near-black gray f7 pointer"
                value={searchParam} onChange={this.handleParamChange}>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          className="input-reset br1 h3 w-100 bn pa3 pl5 pl6-ns mb3 bg-dark-gray light-gray f6 f5-ns"
          type="text"
          placeholder="Search for titles, directors and/or actors..."
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
