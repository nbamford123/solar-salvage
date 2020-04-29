import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

import { latestComic } from '../hooks/latestComic';

export const ComicWrapper: React.FC<{}> = () => {
  const comic = latestComic();
  return (
    <div
      css={css`
        background: #eee;
        border: 1px solid black;
        padding: 0.5rem;
        flex: 0 0 auto;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
            margin-bottom: 0;
          }
          line-height: 0;
        `}
        fixed={comic.comic?.sharp?.fixed ?? undefined}
        alt={comic.page.toString()}
      />
    </div>
  );
};
