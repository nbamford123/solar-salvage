import React from 'react';
import { css } from '@emotion/core';

import { BlogEntry } from './blogEntry';
import { Post } from '../types';

export interface BlogProps {
  posts: Array<Post>;
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div
      css={css`
        background: white;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
      `}
    >
      <h2>News</h2>
      {posts.map(post => (
        <BlogEntry key={post.slug} post={post} />
      ))}
    </div>
  );
};
