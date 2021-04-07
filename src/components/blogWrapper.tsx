import { Frame } from 'arwes';
import { Blog } from './blog';
import { Post } from '../types';
import { ReadLink } from './readLink';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <Frame animate level={2} corners={3}>
    <Blog posts={posts} />
    <ReadLink to="/blog" rel="news">
      All News →
    </ReadLink>
  </Frame>
);
