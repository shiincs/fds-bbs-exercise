import React, { Component } from 'react'

export default class PostForm extends Component {
  // state = {
  //   title: this.props.title,
  //   body: this.props.body
  // }

  render() {
    return (
      <div>
        <h1>새 글 쓰기</h1>
        <form onSubmit = {(e) => this.props.onSubmit(e)}>
          <label htmlFor="">제목
            <input 
              type="text"
              name="title"
              value={this.props.title}
              onChange = {(e) => this.props.onFieldChange(e, 'title')}
            />
          </label>
          <label htmlFor="">내용
            <textarea 
              name="body" 
              cols="30" 
              rows="30" 
              value={this.props.body}
              onChange = {(e) => this.props.onFieldChange(e, 'body')}
            ></textarea>
          </label>
          <button>작성</button>
        </form>
      </div>
    )
  }
}
