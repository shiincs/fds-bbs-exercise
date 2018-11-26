import React, { Component } from 'react'
import Layout from './Layout'
import {UserConsumer, withUser} from '../contexts/UserContext'

class PostDetailView extends Component {

  render() {
    const {postId, onEditPostFormPage, id, userId, title, body} = this.props
    
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

export default withUser(PostDetailView)