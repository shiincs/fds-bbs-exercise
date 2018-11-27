import React, { Component } from 'react'
import PostDetailView from '../components/PostDetailView'
import api from '../api'
import {UserConsumer, withUser} from '../contexts/UserContext'

class PostDetail extends Component {

  state = {
    title: '',
    body: '',
    userId: null
  }

  componentDidMount = async () => {
    const {postId} = this.props

    const {data: {title, body, userId}} = await api.get(`/posts/${postId}`)

    this.setState({
      title,
      body,
      userId
    })
  }

  render() {
    const {userId, title, body} = this.state
    const {onEditPostFormPage, id, postId} = this.props

    return (
      <PostDetailView 
        userId = {userId}
        onEditPostFormPage = {onEditPostFormPage}
        postId = {postId}
        title = {title}
        body = {body}
        id = {id}
      />
    )
  }
}

export default withUser(PostDetail)