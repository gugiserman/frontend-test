import { getSupportedParams } from '../../utils'
import { hashService } from '../../services'

const supportedParams = Object.entries(getSupportedParams())
const defaultParam = supportedParams.find(someParam => someParam[1].default)[0]

let paramFromLocation = hashService.get('param')

if (!supportedParams.find(someParam => someParam[0] === paramFromLocation)) {
  paramFromLocation = false
}

const initialState = paramFromLocation || defaultParam
hashService.set('param', initialState)

const searchParam = (value = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_PARAM':
      hashService.set('param', action.value)
      return action.value
    default:
      return value
  }
}

export default searchParam
