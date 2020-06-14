import React from 'react';
import { css } from '@emotion/core';

import { Sidebar } from './sidebar';
import { pageWidth } from '../types';

interface MainWrapperProps {
  page: React.ReactNode;
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
        flex: 0 0 ${pageWidth}px;
        padding: 0.5rem;
      `}
    >
      {page}
    </div>
    <Sidebar />
  </div>
);
