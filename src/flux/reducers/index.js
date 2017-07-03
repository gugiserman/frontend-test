import { combineReducers } from 'redux'

import search from './search'
import searchParam from './searchParam'
import movies from './movies'
import movie from './movie'

const rootReducer = combineReducers({
  search,
  searchParam,
  movies,
  movie,
})

export default rootReducer
