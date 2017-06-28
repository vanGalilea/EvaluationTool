import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import BatchesContainer from './batches/BatchesContainer'
import BatchPage from './batches/BatchPage'
import StudentPage from './batches/StudentPage'
import BatchEditor from './batches/BatchEditor'
import StudentEditor from './batches/StudentEditor'
import SignIn from './users/SignIn'
import store, { history } from './store'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BatchesContainer} />
        <Route path="/create-batch" component={BatchEditor} />
        <Route path="/batches/:batchNum" component={BatchPage} />
        <Route path="/students/:studentId" component={StudentPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/batches/:batchNum/create-student" component={StudentEditor} />
      </Route>
    </Router>
  </Provider>,
   document.getElementById('root'))

registerServiceWorker()
injectTapEventPlugin()
