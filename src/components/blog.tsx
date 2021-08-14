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
      {posts.map((post) => (
        <BlogEntry
          css={css`
            margin-bottom: 0.5rem;
          `}
          key={post.slug}
          post={post}
        />
      ))}
    </>
  );
};
