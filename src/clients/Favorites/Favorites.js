const localStorage = window.localStorage

class Favorites {
  static get itemName() {
    return 'netflix_roulette_favorites'
  }

  static getMovies() {
    const data = localStorage.getItem(this.itemName)

    if (!data) {
      return []
    }

    const list = JSON.parse(data)

    if (!Array.isArray(list)) {
      this.setMovies()
      return []
    }

    return list
  }

  static setMovies(list = []) {
    const data = JSON.stringify(list)
    localStorage.setItem(this.itemName, data)
  }

  static addMovie(movie = {}) {
    const list = this.getMovies()
    const newList = list.slice()

    newList.unshift(movie)
    this.setMovies(newList)
  }

  static removeMovie(movieUnit) {
    if (!movieUnit) {
      return false
    }

    const list = this.getMovies()
    const index = list.findIndex(movie => movie.unit === movieUnit)

    list.splice(index, 1)
    this.setMovies(list)
  }

  static isFavorite(movieUnit) {
    const list = this.getMovies()
    const index = list.findIndex(movie => movie.unit === movieUnit)

    return index >= 0
  }
}

export default Favorites
