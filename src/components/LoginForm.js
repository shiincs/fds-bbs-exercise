import React, {Component} from 'react'
import api from '../api';

export default class LoginForm extends Component {

  handleLogin = async e => {
    e.preventDefault()
    const username = e.target.elements.username.value
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
            />
          </label>
          <label>비밀번호
            <input 
              type="password"
              name="password"
            />
          </label>
          <button>로그인</button>
        </form>
        <button onClick = {() => onRegister()}>회원가입</button>
      </React.Fragment>
    )
  }
}