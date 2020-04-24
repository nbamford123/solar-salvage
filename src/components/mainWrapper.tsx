import React from 'react';
import { css } from '@emotion/core';

import { Comic } from './comic';
import { Sidebar } from './sidebar';

export const MainWrapper: React.FC<{}> = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Comic />
      <Sidebar />
    </div>
  );
};
