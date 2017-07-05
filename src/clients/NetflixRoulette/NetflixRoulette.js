import axios from 'axios'
import { queryValidated } from '../../utils'

const endpoint = '//netflixroulette.net/api/api.php'
const client = axios.create({
  baseURL: endpoint,
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
          return reject()
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
      }).catch(reject)
    })
  }

  static fetchMovieByTitle(title) {
    return this.fetchMovies({
      title,
    }, true)
  }
}

export { client }
export default NetflixRoulette
