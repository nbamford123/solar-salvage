import { Frame } from 'arwes';
import { css } from '@emotion/react';

import { Blog } from './blog';
import { totalWidth, Post } from '../types';
import { ReadLink } from './readLink';

export interface BlogWrapperProps {
  posts: Array<Post>;
}
export const BlogWrapper: React.FC<BlogWrapperProps> = ({ posts }) => (
  <Frame
    animate
    level={2}
    corners={3}
    css={css`
      max-width: ${totalWidth}px;
    `}
  >
    <Blog posts={posts} />
    <ReadLink to="/blog" rel="news">
      All News →
    </ReadLink>
  </Frame>
);
