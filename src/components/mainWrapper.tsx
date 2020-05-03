import React from 'react';
import { css } from '@emotion/core';

import { latestComic } from '../hooks/latestComic';
import { ComicWrapper } from './comicWrapper';
import { Sidebar } from './sidebar';
import { Comic } from '../types';

interface MainWrapperProps {
  comic?: Comic;
}
export const MainWrapper: React.FC<MainWrapperProps> = ({ comic }) => {
  const postComic = comic || latestComic();

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <ComicWrapper comic={postComic} />
      <Sidebar />
    </div>
  );
};
