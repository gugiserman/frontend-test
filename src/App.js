import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import configureStore from './flux/configureStore'

import {
  HomePage,
} from './pages'

const noMatch = () => (
  <h1>404</h1>
)

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/404" component={noMatch} />
        <Route component={noMatch} />
      </Switch>
    </Router>
  </Provider>
)

export default App
