import React from 'react';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Post } from '../types';

export interface PostProps {
  post: Post;
}
const PostWrapper: React.FC<PostProps> = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <div>
      <h3>{post.title}</h3>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </article>
);

export default PostWrapper;
