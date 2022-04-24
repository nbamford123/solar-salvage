import { Frame, Heading } from 'arwes';
import { css } from '@emotion/react';

import { Blog } from './blog';
import { BlogNavLink } from '../components/blogNav';
import { Post } from '../types';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <Frame>
    <Heading
      css={css`
        padding: 12px;
      `}
    >
      News
    </Heading>
    <Blog posts={posts} />
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
        padding: 24px;
      `}
    >
      <BlogNavLink dir="forward" to="/blog" rel="news" text="All News" />
    </div>
  </Frame>
);
