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

  // login 함수에서는 username, password를 인자로 받는다.
  // 이 인자들이 form에서 생성됐는지, div에서 그냥 input에 때려 박았는지에 대해서
  // 이 함수에서는 알 필요가 없고, 그냥 인자를 받아서 로그인을 수행하는 기능만 잘 동작하면 된다.
  // 이처럼 내부의 원리와 실제 동작하는 부분을 구분하는 것을 '추상화' 라고 한다.
  login = async (username, password) => {
    const res = await api.post('/users/login', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)

    await this.refreshUser()

    // 로그인 폼 보여주기
    this.props.onPostListPage()
  }

  logout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token')
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null
    })
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
      login: this.login.bind(this),
      logout: this.logout.bind(this)
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