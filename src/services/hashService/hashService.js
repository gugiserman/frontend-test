import qs from 'qs'
import createHashHistory from 'history/createHashHistory'
import { sanitizeLocationHash } from '../../utils'

class HashService {
  constructor(location = window.location, history = createHashHistory()) {
    this.history = history
    this.location = location
    this.statesMap = {}

    this.state = qs.parse(
      sanitizeLocationHash(history.location.search)
    )

    this.listen()
  }

  getState() {
    return {
      ...this.state,
    }
  }

  getStringifiedState() {
    return `${qs.stringify(this.state)}`
  }

  sync() {
    const { pathname } = this.history.location
    const query = this.getStringifiedState()

    /**
     * Had to stop reassigning `location.hash` because
     * it was adding too many unecessary history entries, which
     * caused bad weird navigation behaviour with back and forward buttons
     */
    // this.location.hash = `#${pathname}${query && `?${query}`}`

    /**
     * Had to stop using `history.replace` because
     * it was adding double hash symbol to the URL (lol ???)
     * e.g.: '/#/#/?q=tarantino', '/#/favorites/#/'
     */
    // this.history.replace({
    //   pathname,
    //   search: '',
    //   hash: `/?${query}`,
    // })

    /* This works and browser compat seems fine */
    this.location.replace(`#${pathname}${query && `?${query}`}`)
  }

  get(key) {
    if (!key || !key.length) {
      return undefined
    }

    return this.state[key]
  }

  set(key, value) {
    if (!key || !key.length) {
      return false
    }

    if (!value || typeof value !== 'string' || !value.length) {
      return this.remove(key)
    }

    this.state[key] = value
    this.sync()
  }

  remove(key) {
    const newState = {}
    const entries = Object.entries(this.state)

    for (const [k, v] of entries) {
      if (key === k) {
        continue
      }

      newState[k] = v
    }

    this.state = newState
    this.sync()
  }

  listen() {
    const { location } = this.history

    let previousPathname = location.pathname
    let previousSearch = location.search

    this.statesMap[previousPathname] = this.getState()

    this.history.listen(({ pathname, search }) => {
      if (pathname === previousPathname && search === previousSearch) {
        return false
      }

      if (pathname !== previousPathname) {
        this.statesMap[previousPathname] = this.getState()
        this.state = this.statesMap[pathname]
        previousPathname = pathname
        this.sync()
      } else {
        this.statesMap[pathname] = this.getState()
      }
    })
  }
}

const hashService = new HashService()
export default hashService
