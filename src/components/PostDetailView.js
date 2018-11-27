import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';
import { Helmet } from 'react-helmet';

class PostDetailView extends Component {
  render() {
    const { postId, onEditPostFormPage, userId, title, body, id } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>게시물 - {title} </title>
        </Helmet>
        <h1>{title}</h1>
        <p>{body}</p>
        {userId === id && (
          <button onClick={() => onEditPostFormPage(postId)}>수정</button>
        )}
      </React.Fragment>
    );
  }
}

export default withLoading(PostDetailView);
