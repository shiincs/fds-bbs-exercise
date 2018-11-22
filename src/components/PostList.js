import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';
import {UserConsumer} from '../contexts/UserContext';

export default class PostList extends Component {
  state = {
    posts: [],
    loading: false
  }

  componentDidMount = async () => {
    const {data: posts} = await api.get('/posts')
    this.setState({
      posts
    })
  }

  render() {
    const { posts, loading } = this.state
    const { onPostDetailPage, onNewPost, onLoginFormPage } = this.props

    return (
      <Layout title="게시물 목록" onLoginFormPage = {onLoginFormPage}>
        <h1>게시물 목록</h1>
        <ul>
          {
            posts.map(post => (
              <li
                key={post.id}
                onClick={() => onPostDetailPage(post.id)}
              >{post.title}</li>
            ))
          }
        </ul>
        <button onClick={() => onNewPost()}>새 글 쓰기</button>
      </Layout>
    )
  }
}
