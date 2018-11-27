import React, {Component} from 'react'
import {UserConsumer, withUser} from '../contexts/UserContext'
import {Form} from 'semantic-ui-react'

class LoginForm extends Component {
  static defaultProps = {
    // 사용자가 로그인 폼을 전송했을 때 호출되는 함수
    // username과 password 인수를 받음
    login: (username, password) => {},
    // 회원가입 버튼을 눌렀을 때 호출되는 함수
    // 함수를 반드시 넘겨줘야 함(안넘겨주면 에러)
    onRegister: null
  }

  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }

  // handleSubmit 함수에서 이벤트객체를 인자로 받아서 하는 일은
  // 이 이벤트가 form 요소에서 발생한 것이라는 것을 전제로 한다.
  // 그렇기 때문에 이 함수에서 하는 일을 UserContext의 Login 함수 내부에서 할 수도 있지만,
  // 굳이 이렇게 따로 빼서 구분해 놓는 것이다.
  // 즉 이 handleSubmit 함수는 login 함수를 동작시키는 근간이 되는 원리라고 볼 수 있다.
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
        <Form onSubmit={(e) => {
          this.handleSubmit(e)
        }}>
          <h1>로그인</h1>
          <Form.Input
            label="사용자 이름"
            type="text"
            name="username"
          // ref={this.usernameRef}
          />
          <Form.Input
            label="비밀번호"
            type="password"
            name="password"
          // ref={this.passwordRef}
          />
          <Form.Button>로그인</Form.Button>
        </Form>
        <Form.Button onClick={() => onRegister()}>회원가입</Form.Button>
      </React.Fragment>
    )
  }
}

// 함수형 컴포넌트(props를 받아서 element를 반환한다.)
// 사용법은 LoginForm과 같다.
// 여기에서 인수로 받는 props는 상위 component인 app component에서
// LoginForm component를 호출할 때 넘겨준 props를 의미한다.
/* 
  export default props => {
    return (
      <UserConsumer>
        {({login}) => <LoginForm {...props} login = {login} />}
      </UserConsumer>
    )
  }
*/

export default withUser(LoginForm)