import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'))

registerServiceWorker()
injectTapEventPlugin()
