import React, { Component } from 'react'
import styles from './PostForm.module.scss'
import classNames from 'classnames'

class PostForm extends Component {
  static defaultProps = {
    // true가 주어지면, 편집 모드 스타일이 적용됨.
    editing: false,
    // form 전송 시 호출되는 함수, title과 body를 인수로 받음
    onSubmit: () => {}
  }

  render() {
    const { editing } = this.props
    const titleClass = classNames(styles.titleInput, {
      [styles.editing]: editing
    })
    return (
      <div>
        <h1>새 글 쓰기</h1>
        <form onSubmit = {(e) => {
          e.preventDefault()
          const title = e.target.elements.title.value
          const body = e.target.elements.body.value
          this.props.onSubmit(title, body)
        }}>
          <label>제목
            <input 
              className = {titleClass}
              type="text"
              name="title"
              value={this.props.title}
                /* PostForm Component가 NewPost Component에서 호출되면서 렌더링 될 때는
                props를 넘겨받지 않기 때문에 this.props.title은 'undefined' 상태다.
                form 요소에서 value property의 값이 'undefined' 또는 'null' 일때는
                해당 form 요소가 제어되지 않는 컴포넌트 상태로 작동한다. */
              onChange = {(e) => this.props.onFieldChange(e, 'title')}
            />
          </label>
          <label>내용
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

export default PostForm