import React, { Component } from 'react'
import api from '../api'
import { withUser } from '../contexts/UserContext';
import {Form} from 'semantic-ui-react'

class RegisterForm extends Component {

  state = {
    // 현재 입력 필드에 입력된 사용자 이름&암호
    username: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { username, password } = this.state

    // FIXME: 사용자 이름 중복체크 해야함
    const {data: users} = await api.get(`/users`, {
      params: {
        username
      }
    })

    if(users.length > 0) {
      alert('이미 존재하는 ID 입니다.')
      return
    } else {
      const res = await api.post('/users/register', {
        username,
        password
      })
      localStorage.setItem('token', res.data.token)
    }
    
    // TODO: 게시글 목록 보여주기
    this.props.refreshUser()
    this.props.onPostListPage()

  }

  // 메소드 하나로 여러개의 필드를 동시에 Update 할 수 있다.
  handleFieldChange = (e, name) => {
    this.setState({
      // name 변수에 저장되어 있는 문자열을
      // 그대로 속성 이름으로 사용
      [name]: e.target.value
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <Form onSubmit = {e => this.handleSubmit(e)}>
        <h1>회원가입</h1>
        <Form.Input
          label="사용자 이름"
          type="text"
          name="username"
          value={username}
          onChange = { e => this.handleFieldChange(e, 'username')}
        />
        <Form.Input
          label="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange = { e => this.handleFieldChange(e, 'password')}
        />
        <Form.Button>회원가입</Form.Button>
      </Form>
    )
  }
}

export default withUser(RegisterForm)