import React from 'react';
import { css } from '@emotion/core';

import { latestComic } from '../hooks/latestComic';
import { ComicWrapper } from './comicWrapper';
import { Sidebar } from './sidebar';

export const MainWrapper: React.FC<{}> = () => {
  const comic = latestComic();

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <ComicWrapper comic={comic} />
      <Sidebar />
    </div>
  );
};
