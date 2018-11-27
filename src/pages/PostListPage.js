import React, { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../containers/PostList';

export default class PostListPage extends Component {
  render() {
    const { onLoginFormPage, ...rest } = this.props;
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <PostList {...rest} />
      </Layout>
    );
  }
}
