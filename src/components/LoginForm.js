import React, {Component} from 'react'
import api from '../api';

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  handleLogin = async e => {
    e.preventDefault()
    // form을 안쓰면서 제어되지 않는 컴포넌트를 쓰고 싶을 때에는 ref를 써야 한다.
    const username = this.usernameRef.current.value
    const password = e.target.elements.password.value

    const res = await api.post('/users/login', {
      username,
      password
    })

    localStorage.setItem('token', res.data.token)

    this.props.onLogin()
  }

  render() {
    const {onRegister} = this.props

    return (
      <React.Fragment>
        <form onSubmit = {(e) => this.handleLogin(e)}>
          <h1>로그인</h1>
          <label>아이디
            <input 
              type="text"
              name="username"
              ref = {this.usernameRef}
            />
          </label>
          <label>비밀번호
            <input 
              type="password"
              name="password"
              ref = {this.passwordRef}
            />
          </label>
          <button>로그인</button>
        </form>
        <button onClick = {() => onRegister()}>회원가입</button>
      </React.Fragment>
    )
  }
}