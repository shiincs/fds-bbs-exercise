import React, { Component } from 'react';
import classNames from 'classnames';
import './PostListView.scss';

class PostListView extends Component {
  render() {
    const { posts, onPostDetailPage, onNewPost, loading } = this.props;
    const titleClass = classNames('PostList__title', {
      'PostList__title--loading': loading,
    });

    return (
      <React.Fragment>
        <div className="PostList">
          <h1 className={titleClass}>게시물 목록</h1>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList__item"
                key={post.id}
                onClick={() => onPostDetailPage(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
          <button onClick={() => onNewPost()}>새 글 쓰기</button>
        </div>
      </React.Fragment>
    );
  }
}

export default PostListView;
