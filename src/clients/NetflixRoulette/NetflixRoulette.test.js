import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mock from '../../mock/movies.json'
import NetflixRoulette, { client } from './NetflixRoulette'

jest.unmock('axios')
jest.unmock('axios-mock-adapter')

describe('NetflixRoulette API client', () => {
  let mockServer

  beforeEach(() => {
    mockServer = new MockAdapter(client)
  })

  afterEach(() => {
    mockServer.restore()
  })

  it('should fetch movies given query object', () => {
    const query = {
      director: 'Quentin Tarantino',
    }

    mockServer.onGet('', query).reply(({ params }) => {
      expect(params).toEqual(query)
      return [200, mock]
    })

    NetflixRoulette.fetchMovies(query).then(movies => {
      expect(movies).toEqual(mock)
    })
  })

  it('should fetch movie by title', () => {
    const title = 'Kill Bill: Vol. 2'
    const query = {
      title,
    }

    mockServer.onGet('', query).reply(({ params }) => {
      expect(params).toEqual(query)
      return [200, mock[0]]
    })

    NetflixRoulette.fetchMovieByTitle(title).then(movie => {
      expect(movie).toEqual(mock[0])
    })
  })
})
