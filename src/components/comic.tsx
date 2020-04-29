import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

import { latestComic } from '../hooks/latestComic';

export const ComicWrapper: React.FC<{}> = () => {
  const comic = latestComic();
  return (
    // <div
    //   css={css`
    //     border: 1px solid black;
    //     margin: 0.5rem;
    //     width: 640px;
    //   `}
    // >
    //   {' '}
    <Image
      css={css`
        * {
          margin-top: 0;
        }
      `}
      fixed={comic.comic?.sharp?.fixed ?? undefined}
      alt={comic.page.toString()}
    />
    // <div
    //   css={css`
    //     background: #eee;
    //     margin: 0.5rem;
    //     height: 900px;
    //     width: 600px;
    //     flex: 0 0 auto;
    //   `}
    // >
  );
};
