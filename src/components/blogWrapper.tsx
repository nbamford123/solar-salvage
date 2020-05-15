import React from 'react';
import { css } from '@emotion/core';

import { BlogEntry } from './blogEntry';

export const BlogWrapper: React.FC<{}> = () => (
  <div
    css={css`
      background: #eee;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
    `}
  >
    <BlogEntry />
  </div>
);
