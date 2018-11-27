import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PostDetailView from './PostDetailView'

// .add('title', () => <ComponentName />) 형태로 넣어준다.
// props가 들어오는 상황에 따라 각기 다른 페이지로 만들어줄 수 있다.
storiesOf('PostDetailView', module)
  .add('default', () => <PostDetailView userId={1} id={2} />)
  .add('with content', () => <PostDetailView title="제목" body="내용" />)
  .add('작성자로 로그인 한 경우', () => <PostDetailView userId = {3} id = {3}  onEditPostFormPage={action('onEditPostFormPage')} />)