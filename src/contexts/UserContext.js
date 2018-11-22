import React, { Component } from 'react'
import api from '../api'

const {Provider, Consumer} = React.createContext()

export default class UserProvider extends Component {
  // class 내부에서의 메소드의 실행 순서
  // 1. 일반적인 메소드 (not arrow function)
  // --> 일반적인 메소드는 UserProvider 클래스의 prototype 속성에 먼저 저장된다.
  // --> 생성자 메소드는 정의될 때 일반적인 메소드와 같은 레벨로 정의된다.
  // --> 즉, 정의된 순서대로 실행된다.
  // --> 다만, 일반적인 메소드는 JS의 function 처럼 hoisting이 일어나기 때문에
  // --> 위에서 먼저 함수를 값으로 불러온 뒤, 밑에서 그 함수를 정의해도 문제없이 실행된다.
  // 2. 클래스 필드(arrow function 포함)
  // --> 클래스 필드는 UserProvider 클래스의 인스턴스 객체에 저장된다.
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      username: null,
      login: this.login,  
      // 여기에서의 this는 인스턴스 객체 login을 가리키지만,
      // 인스턴스 객체 login을 찾아봐도 없기 때문에
      // prototype chain에 의해 prototype 객체의 login을 찾는다.
      // prototype 객체의 login이 존재하기 때문에 실행되는 것이다.
      logout: this.logout
    }
  }
  
  state = {
    id: null,
    username: null,
    login: this.login.bind(this),
    logout: this.logout.bind(this)
  }

  async componentDidMount() {
    localStorage.getItem('token') && await this.refreshUser()
  }

  // login 함수에서는 username, password를 인자로 받는다.
  // 이 인자들이 form에서 생성됐는지, div에서 그냥 input에 때려 박았는지에 대해서
  // 이 함수에서는 알 필요가 없고, 그냥 인자를 받아서 로그인을 수행하는 기능만 잘 동작하면 된다.
  // 이처럼 내부의 원리와 실제 동작하는 부분을 구분하는 것을 '추상화' 라고 한다.
  async login(username, password) {
    const res = await api.post('/users/login', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)

    await this.refreshUser()

    // 게시물 목록 보여주기
    this.props.onPostListPage()
  }

  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token')
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null
    })

    // 게시물 목록 보여주기 (여기에서는 필요 없는 상태)
    // this.props.onPostListPage()
  }

  async refreshUser() {
    const res2 = await api.get('/me')
    this.setState({
      id: res2.data.id,
      username: res2.data.username
    })
  }

  // state = {
  //   id: null,
  //   username: null,
  //   login: this.login,
  //   logout: this.logout
  // }

  render() {
    // const value = {
    //   username: this.state.username,
    //   id: this.state.id,
    //   login: this.login.bind(this),
    //   logout: this.logout.bind(this)
    // }
    console.log(this.login)
    return (
      <Provider value={this.state}>{this.props.children}</Provider>
    )
  }
}

export {
  UserProvider,
  Consumer as UserConsumer
}