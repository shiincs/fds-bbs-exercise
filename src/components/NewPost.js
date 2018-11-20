import React, { Component } from 'react'

export default class NewPost extends Component {

  render() {
    return (
      <div>
        <h1>새 글 쓰기</h1>
        <form onSubmit = {() => this.handleSubmit()}>
          <label htmlFor="">제목
            <input 
              type="text"
            />
          </label>
          <label htmlFor="">내용
            <textarea name="" id="" cols="30" rows="10" value=""></textarea>
          </label>
          <button>작성</button>
        </form>
      </div>
    )
  }
}
