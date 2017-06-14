import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route } from 'react-router-dom'

import Test from './Test'

@inject('routing', 'userState')
@observer
export default class App extends Component {
  render() {
    const { location, push, goBack } = this.props.routing
    const { login } = this.props.userState

    return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <button onClick={() => push('/test')}>Change url to /test</button>
        <button onClick={() => push('/')}>Change url to /</button>
        <button onClick={() => goBack()}>Go Back</button>
        <button onClick={() => login()}>Login</button>

        <Route path="/test" component={Test}/>
        <Route exact path="/" render={() => <div>Homepage</div>}/>
      </div>
    )
  }
}
