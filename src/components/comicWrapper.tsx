import React from 'react';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ComicNav } from './comicNav';
import { Comic } from '../types';

export interface ComicWrapperProps {
  comic: Comic;
}
export const ComicWrapper: React.FC<ComicWrapperProps> = ({ comic }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Image
        css={css`
          margin-bottom: 1rem;
          margin-top: 1rem;
        `}
        fixed={comic.comic?.sharp?.fixed ?? []}
        alt={comic.page.toString()}
      />
      <ComicNav chapter={comic.chapter} page={comic.page} />
      <MDXRenderer>{comic.note}</MDXRenderer>
    </div>
  );
};
