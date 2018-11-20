import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import NewPost from './components/NewPost'
import EditPostForm from './components/EditPostForm'

class App extends Component {
  // page === 'login' --> 로그인 페이지
  // page === 'register' --> 회원가입 페이지
  // page === 'post-list' --> 게시물 목록 페이지
  // page === 'post-detail' --> 게시물 세부 페이지
  // page === 'new-post' --> 새 글 쓰기 페이지
  // page === 'edit-post-form' --> 글 수정 페이지
  state = {
    page: 'post-list',
    // 현재 보고 있는 게시물의 ID
    postId: null
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

  handlePostDetailPage = (postId) => {
    this.setState({
      page: 'post-detail',
      postId
    })
  }

  handleNewPost = () => {
    this.setState({
      page: 'new-post'
    })
  }

  handleEditPostFormPage = (postId) => {
    this.setState({
      page: 'edit-post-form',
      postId
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
            <PostList onPostDetailPage= {(postId) => this.handlePostDetailPage(postId)} onNewPost = {() => this.handleNewPost()} />
          ) : this.state.page === 'post-detail' ? (
            <PostDetail postId = {this.state.postId} onEditPostFormPage = {(postId) => this.handleEditPostFormPage(postId)}/>
          ) : this.state.page === 'new-post' ? (
            <NewPost onPostDetailPage= {(postId) => this.handlePostDetailPage(postId)} />
          ) : this.state.page === 'edit-post-form' ? (
            <EditPostForm postId = {this.state.postId} onPostDetailPage= {(postId) => this.handlePostDetailPage(postId)} />
          ) : null
        }
      </div>
    );
  }
}

export default App;
