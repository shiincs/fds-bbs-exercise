import React, { Component } from 'react'
import api from '../api';

export default class NewPost extends Component {
  state = {
    title: '',
    body: ''
  }
  
  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value

    const res = await api.post('/posts', {
      title,
      body
    })

    // TODO: 생성된 게시물 보여주기
    this.props.onPostDetailPage(res.data.id)
  }
  render() {
    return (
      <div>
        <h1>새 글 쓰기</h1>
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <label htmlFor="">제목
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange = {(e) => this.handleFieldChange(e, 'title')}
            />
          </label>
          <label htmlFor="">내용
            <textarea 
              name="body" 
              cols="30" 
              rows="30" 
              value={this.state.body}
              onChange = {(e) => this.handleFieldChange(e, 'body')}
            ></textarea>
          </label>
          <button>작성</button>
        </form>
      </div>
    )
  }
}
