import React, {Component} from 'react'
import {UserConsumer} from '../contexts/UserContext'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  

  render() {
    const {onRegister} = this.props

    return (
      <UserConsumer>
        {({ login }) => (
          <React.Fragment>
            <form onSubmit={(e) => {
              e.preventDefault()
              const username = e.target.elements.username.value
              const password = e.target.elements.password.value

              login(username, password)
            }}>
              <h1>로그인</h1>
              <label>아이디
            <input
                  type="text"
                  name="username"
                  ref={this.usernameRef}
                />
              </label>
              <label>비밀번호
            <input
                  type="password"
                  name="password"
                  ref={this.passwordRef}
                />
              </label>
              <button>로그인</button>
            </form>
            <button onClick={() => onRegister()}>회원가입</button>
          </React.Fragment>
        )}
        
      </UserConsumer>
    )
  }
}