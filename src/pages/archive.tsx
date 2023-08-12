import React from 'react';
import { css } from '@emotion/react';
import { Col, Heading, Project, Row, Words } from '@nbamford123/arwes';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import { ArwesSelect } from '../components/arwesSelect';
import { useChapterSummaries } from '../hooks/useChapterSummaries';
import { getComicPath } from '../util/getComicPath';

// TODO: Fix page indexing when chapter title pages (0) are added
const Archive: React.FC = () => {
  const chapters = useChapterSummaries();
  return (
    <Layout
      page={
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 16px;
          `}
        >
          <Heading>Archive</Heading>
          {chapters.map((chapter) => (
            <Project
              css={css`
                margin-bottom: 32px;
                width: 100%;
              `}
              key={chapter.chapter}
              header={`Chapter ${chapter.chapter} ${chapter.title}`}
            >
              <Row>
                <Col s={12} l={3}>
                  <Link
                    to={`/${getComicPath(chapter.chapter, 1)}`}
                    css={css`
                      width: 200px;
                      flex-shrink: 0;
                    `}
                  >
                    <GatsbyImage
                      image={getImage(chapter.thumb) as IGatsbyImageData}
                      css={css`
                        * {
                          margin-top: 0;
                          width: 200px;
                        }
                      `}
                      alt={chapter.chapter.toString()}
                    />
                  </Link>
                </Col>
                <Col s={12} l={9}>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      padding-top: 10px;
                    `}
                  >
                    <Words animate show>
                      {chapter.synopsis}
                    </Words>
                    <div
                      css={css`
                        padding-top: 20px;
                        padding-bottom: 130px;
                      `}
                    >
                      <ArwesSelect
                        title={'Jump to page'}
                        onChange={(value: number) => navigate(value)}
                        options={Array.from(
                          Array(chapter.pages),
                          (_, index) => ({
                            value: `/${getComicPath(
                              chapter.chapter,
                              index + 1,
                            )}`,
                            name: `${index + 1}`,
                          }),
                        )}
                        placeholder="JUMP TO PAGE..."
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Project>
          ))}
        </div>
      }
    />
  );
};

export default Archive;
