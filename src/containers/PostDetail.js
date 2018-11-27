import React, { Component } from 'react';
import PostDetailView from '../components/PostDetailView';
import api from '../api';
import { UserConsumer, withUser } from '../contexts/UserContext';

class PostDetail extends Component {
  state = {
    title: '',
    body: '',
    userId: null,
    loading: true,
  };

  componentDidMount = async () => {
    const { postId } = this.props;

    const {
      data: { title, body, userId },
    } = await api.get(`/posts/${postId}`);

    this.setState({
      title,
      body,
      userId,
      loading: false,
    });
  };

  render() {
    const { userId, title, body, loading } = this.state;
    const { onEditPostFormPage, id, postId } = this.props;

    return (
      <PostDetailView
        userId={userId}
        onEditPostFormPage={onEditPostFormPage}
        postId={postId}
        title={title}
        body={body}
        id={id}
        loading={loading}
      />
    );
  }
}

export default withUser(PostDetail);
