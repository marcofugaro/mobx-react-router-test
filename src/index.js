import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router'

import App from './App'
import routingStore from './state/RoutingState'
import userState from './state/UserState'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, routingStore)

ReactDOM.render(
  <Provider routing={routingStore} userState={userState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
