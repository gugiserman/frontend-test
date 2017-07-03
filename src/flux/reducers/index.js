import { combineReducers } from 'redux'

import search from './search'
import searchParam from './searchParam'
import movies from './movies'
import showMoviesLoading from './showMoviesLoading'
import movie from './movie'

const rootReducer = combineReducers({
  search,
  searchParam,
  movies,
  showMoviesLoading,
  movie,
})

export default rootReducer
