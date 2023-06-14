import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/react';
import { Frame } from '@nbamford123/arwes';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post, ...rest }) => (
  <article {...rest}>
    <Frame>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-left: 1rem;
          padding-right: 1rem;
        `}
      >
        <h3>{post.title}</h3>
        <MDXRenderer>{post.body}</MDXRenderer>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h6>{post.author}</h6>
          <h6>
            {post.date &&
              post.date.toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
          </h6>
        </div>
      </div>
    </Frame>
  </article>
);
