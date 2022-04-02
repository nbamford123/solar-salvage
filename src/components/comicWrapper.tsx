import React from 'react';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ComicNav } from './comicNav';
import { Comic, ChapterSummary } from '../types';
import { getComicPath } from '../util/getComicPath';
import { useChapterSummaries } from '../hooks/useChapterSummaries';

export interface ComicWrapperProps {
  comic: Comic;
}

const ImageLink: React.FC<{
  chapterSummary?: ChapterSummary;
  chapters: ChapterSummary[];
  page: number;
}> = ({ chapterSummary, chapters, children, page }) => {
  const { chapter, pages: chapterPages } = chapterSummary || {
    chapter: 1,
    pages: 1,
  };
  if (chapterPages > page) {
    return <Link to={`/${getComicPath(chapter, page + 1)}`}>{children}</Link>;
  } else if (chapters.length > chapter) {
    return <Link to={`/${getComicPath(chapter + 1, 1)}`}>{children}</Link>;
  }
  return <>{children}</>;
};

export const ComicWrapper: React.FC<ComicWrapperProps> = ({ comic }) => {
  // Fetch my chapter
  const chapters = useChapterSummaries();
  const myChapter = chapters.find(
    (chapterSummary) => chapterSummary.chapter === comic.chapter,
  );
  const image = getImage(comic.comic);
  return (
    <>
      <ImageLink
        chapters={chapters}
        chapterSummary={myChapter}
        page={comic.page}
      >
        {image ? (
          <GatsbyImage image={image} alt={comic.page.toString()} />
        ) : (
          comic.page.toString()
        )}
      </ImageLink>
      <ComicNav chapter={comic.chapter} page={comic.page} />
      <MDXRenderer>{comic.note}</MDXRenderer>
      <div
        css={css`
          margin-bottom: 3rem;
        `}
      />
    </>
  );
};
