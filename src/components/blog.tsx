import React from 'react';
import { css } from '@emotion/core';

import usePosts from '../hooks/usePosts';
import PostPreview from '../components/postPreview';

export const Blog: React.FC<{}> = () => {
  const posts = usePosts();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h2>Blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
