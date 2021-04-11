import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Project } from 'arwes';
import { Post } from '../types';

export interface BlogEntryProps {
  post: Post;
}
export const BlogEntry: React.FC<BlogEntryProps> = ({ post }) => (
  <article>
    <Project header={post.title}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Project>
  </article>
);
