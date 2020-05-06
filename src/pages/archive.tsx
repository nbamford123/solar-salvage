import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { chapterSummary } from '../hooks/chapterSummary';

const Archive: React.FC<{}> = () => {
  const chapters = chapterSummary();
  return (
    <Layout>
      <div
        css={css`
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
              to={`${chapter.chapter}-1`}
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
                fixed={chapter?.thumb?.sharp?.fixed}
                alt={chapter.chapter.toString()}
              />
            </Link>
            <div
              css={css`
                flex: 1 1 auto;
              `}
            >
              <h2>
                Chapter {chapter.chapter} {chapter.title}
              </h2>
              <p>{chapter.synopsis}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Archive;
