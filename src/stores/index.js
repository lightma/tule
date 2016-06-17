import { createStore } from 'redux'
import reducers from '../reducers'
module.exports = function(initialState) {
  const store = createStore(reducers, initialState)
  console.log("initialState: " + initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
