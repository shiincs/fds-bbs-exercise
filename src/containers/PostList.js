import React, { Component } from 'react'
import api from '../api'
import PostListView from '../components/PostListView'

class PostList extends Component {
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
    const {posts, loading} = this.state
    const {onPostDetailPage, onNewPost} = this.props
    return (
      <PostListView 
        posts = {posts}
        loading = {loading}
        onPostDetailPage = {onPostDetailPage}
        onNewPost = {onNewPost}
      />
    )
  }
}

export default PostList