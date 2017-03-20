import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import generateStore from './store'
import App from './App'

const store = generateStore()

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root'),
)
