import React, { Component } from 'react'
import api from '../api'

const {Provider, Consumer} = React.createContext()

export default class UserProvider extends Component {
  state = {
    id: null,
    username: null
  }

  componentDidMount = async () => {
    localStorage.getItem('token') && await this.refreshUser()
  }

  login = async (username, password) => {
    const res = await api.post('/users/login', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)

    await this.refreshUser()
  }

  refreshUser = async() => {
    const res2 = await api.get('/me')
    this.setState({
      id: res2.data.id,
      username: res2.data.username
    })
  }
  render() {
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this)
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {
  UserProvider,
  Consumer as UserConsumer
}