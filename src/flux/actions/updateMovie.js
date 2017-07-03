import { Favorites } from '../../clients'

const updateMovie = (data = {}) => ({
  type: 'UPDATE_MOVIE',
  data: {
    ...data,
    isFavorite: Favorites.isFavorite(data.unit)
  },
})

export default updateMovie
