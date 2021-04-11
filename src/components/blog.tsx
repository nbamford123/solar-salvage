import React from 'react';
import { css } from '@emotion/react';

import { BlogEntry } from './blogEntry';
import { Post } from '../types';

export interface BlogProps {
  posts: Array<Post>;
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <h2
        css={css`
          margin-left: 2rem;
        `}
      >
        News
      </h2>
      {posts.map((post) => (
        <BlogEntry key={post.slug} post={post} />
      ))}
    </>
  );
};
