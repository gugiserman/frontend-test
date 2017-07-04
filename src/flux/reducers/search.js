import { hashService } from '../../services'

const stateFromLocation = hashService.get('q')
const initialState = stateFromLocation || ''

const search = (value = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      hashService.set('q', action.value)
      return action.value
    case 'UPDATE_SEARCH_PARAM':
      hashService.remove('q')
      return ''
    default:
      return value
  }
}

export default search
