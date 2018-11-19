import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'

class App extends Component {
  // page === 'login' --> 로그인 페이지
  // page === 'register' --> 회원가입 페이지
  state = {
    page: 'login'
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
          ) : this.state.page === 'home' ? (
            <Home />
          ) : null
        }
      </div>
    );
  }
}

export default App;
