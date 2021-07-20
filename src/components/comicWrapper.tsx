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
    <>
      <Image
        fixed={comic.comic?.sharp?.fixed ?? []}
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
    </>
  );
};
