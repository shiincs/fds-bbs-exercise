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
    const {title, body} = this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}
