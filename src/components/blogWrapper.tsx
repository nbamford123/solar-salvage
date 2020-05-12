import React from 'react';
import { css } from '@emotion/core';

import { BlogPreview } from './blogPreview';

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
    <BlogPreview />
  </div>
);
