import { combineReducers } from 'redux'

import search from './search'
import searchParam from './searchParam'
import movies from './movies'
import showMoviesLoading from './showMoviesLoading'
import showMoviesNotFound from './showMoviesNotFound'
import movie from './movie'

const rootReducer = combineReducers({
  search,
  searchParam,
  movies,
  showMoviesLoading,
  showMoviesNotFound,
  movie,
})

export default rootReducer
