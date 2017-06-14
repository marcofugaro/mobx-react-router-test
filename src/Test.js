import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('routing')
@observer
export default class Test extends Component {
  navigateHome = (e) => {
    e.preventDefault()
    const { push } = this.props.routing
    push('/')
  }
  render() {
    return (
      <div>Test component, <a onClick={this.navigateHome}>Back to home!</a></div>
    )
  }
}
