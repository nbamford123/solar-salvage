import React from 'react';
import { css } from '@emotion/core';

import { Blog } from './blog';
import { Post } from '../types';
import { ReadLink } from './readLink';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <div
    css={css`
      background: #eee;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
    `}
  >
    <Blog posts={posts} />
    <ReadLink to="/blog" rel="news">
      All News →
    </ReadLink>
  </div>
);
