import { action } from 'mobx'

import routing from './RoutingState'

class UserState {
  @action.bound
  login() {
    routing.push('/')
  }
}

export default new UserState()
