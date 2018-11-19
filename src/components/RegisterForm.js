import React, { Component } from 'react'
import api from '../api'

export default class RegisterForm extends Component {

  handleSubmit = async e => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value

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

  }

  render() {
    return (
      <form onSubmit = {e => this.handleSubmit(e)}>
        <h1>회원가입</h1>
        <input
          type="text"
          name="username"
        />
        <input
          type="password"
          name="password"
        />
        <button>회원가입</button>
      </form>
    )
  }
}
