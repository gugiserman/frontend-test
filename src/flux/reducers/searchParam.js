import { getSupportedParams } from '../../utils'

const supportedParams = Object.entries(getSupportedParams())
const defaultParam = supportedParams.find(someParam => someParam[1].default)
const initialState = defaultParam[0]

const searchParam = (value = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_PARAM':
      return action.value
    default:
      return value
  }
}

export default searchParam
