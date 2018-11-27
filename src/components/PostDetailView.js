import React, { Component } from 'react'
import Layout from './Layout'
import withLoading from '../hoc/withLoading'


class PostDetailView extends Component {

  render() {
    const {postId, onEditPostFormPage, userId, title, body, id} = this.props
    
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

export default withLoading(PostDetailView)