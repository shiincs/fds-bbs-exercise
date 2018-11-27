import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class PostDetailView extends Component {
  render() {
    const { postId, onEditPostFormPage, userId, title, body, id } = this.props;

    return (
      <React.Fragment>
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
