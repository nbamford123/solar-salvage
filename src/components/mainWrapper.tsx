import React from 'react';
import { css } from '@emotion/core';

import { ComicWrapper } from './comic';
import { Sidebar } from './sidebar';

export const MainWrapper: React.FC<{}> = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <ComicWrapper />
      <Sidebar />
    </div>
  );
};
