import { getSupportedParams } from './'

const supportedParams = getSupportedParams()
const supportedParamNames = Object.keys(supportedParams)

const queryValidated = (query = {}) => {
  if (typeof query !== 'object') {
    return false
  }

  const entries = Object.entries(query)

  for (const [key, value] of entries) {
    if (!key || !supportedParamNames.includes(key) ||
        !value || supportedParams[key].minLength > value.length) {
      return false
    }
  }

  return true
}

export default queryValidated
