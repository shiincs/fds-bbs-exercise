import React, { Component } from 'react';
import api from '../api';
import Layout from './Layout';
import classNames from 'classnames'
import './PostList.scss'

export default class PostList extends Component {
  state = {
    posts: [],
    loading: true
  }

  componentDidMount = async () => {
    const {data: posts} = await api.get('/posts')
    this.setState({
      posts,
      loading: false
    })
  }

  render() {
    const { posts } = this.state
    const { onPostDetailPage, onNewPost, onLoginFormPage } = this.props
    const titleClass = classNames(
      'PostList__title',
      {
        'PostList__title--loading' : this.state.loading
      }
    )
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <div className="PostList">
          <h1 className={titleClass}>게시물 목록</h1>
          <ul className="PostList__list">
            {
              posts.map(post => (
                <li
                  className="PostList__item"
                  key={post.id}
                  onClick={() => onPostDetailPage(post.id)}
                >{post.title}</li>
              ))
            }
          </ul>
          <button onClick={() => onNewPost()}>새 글 쓰기</button>
        </div>
      </Layout>
    )
  }
}
