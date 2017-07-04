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

    this.location.hash = `#${pathname}${query && `?${query}`}`
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
