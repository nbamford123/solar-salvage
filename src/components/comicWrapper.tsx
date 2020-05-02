import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

import { ComicNav } from './comicNav';

import { Comic } from '../types';

interface ComicWrapperProps {
  comic: Comic;
}

export const ComicWrapper: React.SFC<ComicWrapperProps> = ({ comic }) => {
  return (
    <div
      css={css`
        background: #eee;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        line-height: 0;
        padding: 0.5rem;
        flex: 0 0 auto;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fixed={comic.comic?.sharp?.fixed ?? undefined}
        alt={comic.page.toString()}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <ComicNav />
      </div>
    </div>
  );
};
