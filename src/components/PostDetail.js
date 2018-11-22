import React, { Component } from 'react'
import api from '../api'
import Layout from './Layout'
import {UserConsumer} from '../contexts/UserContext'

export default class PostDetail extends Component {
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
    const {postId, onEditPostFormPage} = this.props
    const {title, body, userId} = this.state
    return (
      <Layout title="게시물 상세보기">
        <h1>{title}</h1>
        <p>{body}</p>
        <UserConsumer>
          {({id}) => {
            if(userId === id) {
              return (<button onClick = {() => onEditPostFormPage(postId)}>수정</button>)
            }
          }}
        </UserConsumer>
      </Layout>
    )
  }
}
