import { combineReducers } from 'redux'

import search from './search'
import movies from './movies'
import movie from './movie'

const rootReducer = combineReducers({
  search,
  movies,
  movie,
})

export default rootReducer
