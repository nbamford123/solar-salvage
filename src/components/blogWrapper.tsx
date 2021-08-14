import { Project } from 'arwes';

import { Blog } from './blog';
import { ReadLink } from './readLink';
import { Post } from '../types';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <Project header="News">
    <Blog posts={posts} />
    <ReadLink to="/blog" rel="news">
      All News →
    </ReadLink>
  </Project>
);
