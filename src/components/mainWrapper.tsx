import React from 'react';
import { css } from '@emotion/core';

import { Sidebar } from './sidebar';

interface MainWrapperProps {
  page: JSX.Element;
}
export const MainWrapper: React.FC<MainWrapperProps> = ({ page }) => (
  <div
    css={css`
      display: flex;
    `}
  >
    <div
      css={css`
        background: #eee;
        border: 1px solid black;
        flex: 0 0 640px;
        padding: 0.5rem;
      `}
    >
      {page}
    </div>
    <Sidebar />
  </div>
);
