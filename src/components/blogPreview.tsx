import React from 'react';
import { css } from '@emotion/core';

import usePosts from '../hooks/usePosts';
import PostPreview from './postPreview';

// TODO: limit this to two or three posts
export const BlogPreview: React.FC<{}> = () => {
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
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
