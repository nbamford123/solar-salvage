import { Project } from 'arwes';
import { css } from '@emotion/react';

import { Blog } from './blog';
import { BlogNavLink } from '../components/blogNav';
import { Post } from '../types';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <Project header="News">
    <Blog posts={posts} />
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >
      <BlogNavLink dir="forward" to="/blog" rel="news" text="All News" />
    </div>
  </Project>
);
