import React, { Component } from 'react';
import api from '../api';
import PostForm from './PostForm';

export default class NewPost extends Component {
  state = {
    title: '',
    body: '',
  };

  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = async (title, body) => {
    const res = await api.post('/posts', {
      title,
      body,
    });

    // TODO: 생성된 게시물 보여주기
    this.props.onPostDetailPage(res.data.id);
  };

  render() {
    return (
      <PostForm
        onSubmit={(title, body) => this.handleSubmit(title, body)}
        onFieldChange={(e, name) => this.handleFieldChange(e, name)}
      />
    );
  }
}
