import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ComicNav } from './comicNav';
import { Comic } from '../types';

export interface ComicWrapperProps {
  comic: Comic;
}
export const ComicWrapper: React.SFC<ComicWrapperProps> = ({ comic }) => {
  return (
    <div
      css={css`
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem;
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
        <ComicNav chapter={comic.chapter} page={comic.page} />
      </div>
      <MDXRenderer>{comic.note}</MDXRenderer>
    </div>
  );
};
