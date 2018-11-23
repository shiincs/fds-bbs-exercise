import React, { Component } from 'react'
import api from '../api'
import Layout from './Layout'
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
    const {postId, onEditPostFormPage, id} = this.props
    const {title, body, userId} = this.state
    return (
      <Layout title="게시물 상세보기">
        <h1>{title}</h1>
        <p>{body}</p>
        {
          userId === id && (<button onClick = {() => onEditPostFormPage(postId)}>수정</button>)
        }
      </Layout>
    )
  }
}

export default withUser(PostDetail)