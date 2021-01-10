import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import { Link, navigate } from 'gatsby';
import Select from 'react-select';

import Layout from '../components/layout';
import { chapterSummary } from '../hooks/chapterSummary';
import { getComicPath } from '../util/getComicPath';

// TODO: Fix page indexing when chapter title pages (0) are added
const Archive: React.FC<{}> = () => {
  const chapters = chapterSummary();
  const page = (
    <div
      css={css`
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1>Archive</h1>
      {chapters.map(chapter => (
        <div
          css={css`
            max-width: 640px;
            display: flex;
          `}
          key={chapter.chapter}
        >
          <Link
            to={getComicPath(chapter.chapter, 1)}
            css={css`
              margin: 1rem 1rem 0 0;
              width: 200px;
              flex-shrink: 0;
            `}
          >
            <Image
              css={css`
                * {
                  margin-top: 0;
                  width: 200px;
                  object-fit: contain;
                  align-self: flex-start;
                }
              `}
              fixed={chapter?.thumb?.sharp?.fixed ?? []}
              alt={chapter.chapter.toString()}
            />
          </Link>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
              height: 40px;
            `}
          >
            <h2>
              Chapter {chapter.chapter} {chapter.title}
            </h2>
            <p>{chapter.synopsis}</p>
            <Select
              css={css`
                margin-top: 1rem;
                * {
                  margin-top: 0;
                }
              `}
              placeholder="Jump to page"
              onChange={(value, action) =>
                action.action === 'select-option' &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                navigate((value as any).value)
              }
              options={Array.from(Array(chapter.pages), (_, index) => ({
                value: getComicPath(chapter.chapter, index + 1),
                label: `${index + 1}`,
              }))}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return <Layout page={page} />;
};

export default Archive;
