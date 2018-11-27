import React, { Component } from 'react';
import PostForm from './PostForm';
import api from '../api';

export default class EditPostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount = async () => {
    const {
      data: { title, body },
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
    });
  };

  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = async (title, body) => {
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body,
    });

    // TODO: 게시물 세부 페이지 보여주기
    // FIXME: 자기가 작성한 글만 수정 가능하도록 고쳐야 함(현재는 권한 없으면 403 error 띄움)
    this.props.onPostDetailPage(this.props.postId);
  };

  render() {
    const { title, body } = this.state;
    if (!title) {
      return 'loading...';
    }
    return (
      <PostForm
        editing={true}
        title={title}
        body={body}
        onSubmit={(title, body) => this.handleSubmit(title, body)}
        onFieldChange={(e, name) => this.handleFieldChange(e, name)}
      />
    );
  }
}
