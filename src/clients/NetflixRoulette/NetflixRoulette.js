import axios from 'axios'
import { queryValidated } from '../../utils'

const client = axios.create({
  baseURL: '//netflixroulette.net/api/api.php'
})

class NetflixRoulette {
  static fetchMovies(query, singleResult = false) {
    return new Promise((resolve, reject) => {
      if (!queryValidated(query)) {
        return resolve()
      }

      const data = {
        params: query,
      }

      client.get(null, data).then(response => {
        const { data } = response

        if (!data) {
          return reject(singleResult ? {} : [])
        }

        let movies = []

        if (Array.isArray(data)) {
          if (singleResult) {
            return resolve(data[0])
          }

          movies = movies.concat(data)
        } else {
          if (singleResult) {
            return resolve(data)
          }

          movies.push(data)
        }

        return resolve(movies)
      })
    })
  }

  static fetchMovieByTitle(title) {
    return this.fetchMovies({
      title,
    }, true)
  }
}

export default NetflixRoulette
