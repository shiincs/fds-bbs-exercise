import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'

class App extends Component {
  // page === 'login' --> 로그인 페이지
  // page === 'register' --> 회원가입 페이지
  // page === 'post-list' --> 게시물 목록 페이지
  state = {
    page: 'post-list'
  }

  handleRegisterPage = () => {
    this.setState({
      page: 'register'
    })
  }

  handleLogin = () => {
    this.setState({
      page: 'home'
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.page === 'login' ? (
            <LoginForm onRegister={() => this.handleRegisterPage()} onLogin = {() => this.handleLogin()} />
          ) : this.state.page === 'register' ? (
            <RegisterForm />
          ) : this.state.page === 'post-list' ? (
            <PostList />
          ) : null
        }
      </div>
    );
  }
}

export default App;
