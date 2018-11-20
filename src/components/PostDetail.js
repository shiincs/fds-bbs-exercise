import React, { Component } from 'react'
import api from '../api'

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
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick = {() => onEditPostFormPage(postId)}>수정</button>
      </div>
    )
  }
}
