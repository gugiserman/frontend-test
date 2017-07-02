import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
}

const configureStore = () => createStore(rootReducer, initialState)

export default configureStore
