import { combineReducers } from 'redux'

import search from './search'
import movies from './movies'

const rootReducer = combineReducers({
  search,
  movies,
})

export default rootReducer
