import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from './reducers/index'
import Navigator from './Navigator'

console.disableYellowBox = true

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default App = () => <Provider store={store}>
  <Navigator/>
</Provider>
