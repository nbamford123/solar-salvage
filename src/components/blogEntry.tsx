import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FrameLines } from '@arwes/core';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post }) => (
  <article>
    <FrameLines>
      <MDXRenderer>{post.body}</MDXRenderer>
    </FrameLines>
  </article>
);
