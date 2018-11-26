import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import PostDetail from './containers/PostDetail';
import NewPost from './components/NewPost';
import EditPostForm from './components/EditPostForm';
import {UserProvider} from './contexts/UserContext';

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

  handlePostListPage = () => {
    this.setState({
      page: 'post-list'
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

  handleLoginFormPage = () => {
    this.setState({
      page: 'login'
    })
  }

  render() {
    return (
      <UserProvider onPostListPage = {this.handlePostListPage}>
        <div className="App">
          {
            this.state.page === 'login' ? (
              <LoginForm onRegister={() => this.handleRegisterPage()} />
            ) : this.state.page === 'register' ? (
              <RegisterForm />
            ) : this.state.page === 'post-list' ? (
              <PostList 
                onPostDetailPage={(postId) => this.handlePostDetailPage(postId)} 
                onNewPost={() => this.handleNewPost()} 
                onLoginFormPage = {() => this.handleLoginFormPage()}
              />
            ) : this.state.page === 'post-detail' ? (
              <PostDetail postId={this.state.postId} onEditPostFormPage={(postId) => this.handleEditPostFormPage(postId)} />
            ) : this.state.page === 'new-post' ? (
              <NewPost onPostDetailPage={(postId) => this.handlePostDetailPage(postId)} />
            ) : this.state.page === 'edit-post-form' ? (
              <EditPostForm postId={this.state.postId} onPostDetailPage={(postId) => this.handlePostDetailPage(postId)} />
            ) : null
          }
        </div>
      </UserProvider>
    );
  }
}

export default App;
