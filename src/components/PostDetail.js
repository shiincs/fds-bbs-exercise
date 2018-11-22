import React, { Component } from 'react'
import api from '../api'
import Layout from './Layout'

export default class PostDetail extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount = async () => {
    const {postId} = this.props

    const {data: {title, body}} = await api.get(`/posts/${postId}`)

    this.setState({
      title,
      body
    })
  }

  render() {
    const {postId, onEditPostFormPage} = this.props
    const {title, body} = this.state
    return (
      <Layout title="게시물 상세보기">
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick = {() => onEditPostFormPage(postId)}>수정</button>
      </Layout>
    )
  }
}
