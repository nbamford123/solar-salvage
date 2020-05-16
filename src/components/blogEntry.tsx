import React from 'react';
import { css } from '@emotion/core';

import usePosts from '../hooks/usePosts';
import PostWrapper from './postWrapper';

// TODO: limit this to two or three posts
export const BlogEntry: React.FC<{}> = () => {
  // Just get the latest 4, here.
  const posts = usePosts();
  return (
    <div
      css={css`
        background: white;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
      `}
    >
      <h2>Blog</h2>
      {posts.map(post => (
        <PostWrapper key={post.slug} post={post} />
      ))}
    </div>
  );
};
