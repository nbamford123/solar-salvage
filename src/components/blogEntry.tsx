import { css } from '@emotion/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Project } from 'arwes';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post }) => (
  <article
    css={css`
      // border-bottom: 1px solid #ddd;
      // display: flex;
      // margin-top: 0;
      // padding-bottom: 1rem;

      // :first-of-type {
      //   margin-top: 1rem;
      // }
    `}
  >
    <Project header={post.title}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Project>
  </article>
);
