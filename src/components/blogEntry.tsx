import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/react';
import { Frame } from 'arwes';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post, ...rest }) => (
  <article {...rest}>
    <Frame>
      <div
        css={css`
          padding: 0.5rem;
        `}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Frame>
  </article>
);
