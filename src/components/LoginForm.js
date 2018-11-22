import React, {Component} from 'react'
import {UserConsumer} from '../contexts/UserContext'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    this.props.login(username, password)
  }

  render() {
    const {onRegister} = this.props

    return (
      <React.Fragment>
        <form onSubmit={(e) => {
          this.handleSubmit(e)
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
    )
  }
}

// 함수형 컴포넌트(props를 받아서 element를 반환한다.)
// 사용법은 LoginForm과 같다.
export default props => {
  return (
    <UserConsumer>
      {({login}) => <LoginForm {...props} login = {login} />}
    </UserConsumer>
  )
}