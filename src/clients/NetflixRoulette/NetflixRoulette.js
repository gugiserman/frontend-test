import axios from 'axios'

const PREFIX = 'NetflixRoulette'
const INVALID_TITLE_MSG = `${PREFIX} -> fetchMovieByTitle: Invalid 'title'.`

const client = axios.create({
  baseURL: '//netflixroulette.net/api/api.php'
})

class NetflixRoulette {
  static fetchMovieByTitle(title) {
    return new Promise((resolve, reject) => {
      if (!title || typeof title !== 'string' || !title.length) {
        return reject({ error: INVALID_TITLE_MSG })
      }

      const data = {
        params: {
          title,
        }
      }

      client.get(null, data).then(response => {
        if (response.data && response.data.unit) {
          return resolve(response.data)
        }

        return reject()
      })
    })
  }
}

export default NetflixRoulette
