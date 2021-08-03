import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Frame } from 'arwes';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post }) => (
  <article>
    <Frame>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Frame>
  </article>
);
