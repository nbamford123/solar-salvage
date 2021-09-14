/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { navigate } from 'gatsby';
import {
  AiOutlineLeft,
  AiOutlineDoubleLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from 'react-icons/ai';

import { ArwesSelect } from './arwesSelect';
import { getComicPath } from '../util/getComicPath';
import { NavLink } from './navLink';
import { useChapterSummaries } from '../hooks/useChapterSummaries';

export interface ComicNavProps {
  chapter: number;
  page: number;
}

const ComicNavLink: React.FC<{
  disabled?: boolean;
  title: string;
  to: string;
}> = ({ children, ...rest }) => (
  <NavLink fontSize="2.5rem" {...rest}>
    {children}
  </NavLink>
);

// TODO: Maybe tippy or a real tooltip?
export const ComicNav: React.FC<ComicNavProps> = ({ chapter, page }) => {
  // Fetch all the chapters
  const chapterInfo = useChapterSummaries();

  // Chapters for select nav
  const chapterOptions = chapterInfo.map((chapterInfo) => ({
    value: chapterInfo.chapter,
    name: `CHAPTER ${chapterInfo.chapter}: ${chapterInfo.title.toUpperCase()}`,
    disabled: chapterInfo.chapter === chapter,
  }));

  // Current chapter
  const myChapter = chapterInfo.find(
    (chapterSummary) => chapterSummary.chapter === chapter,
  ) || { chapter: 1, pages: 0 };

  // prev, next chapters, if they exist
  const prevChapter = chapterInfo.find(
    (chapterSummary) => chapterSummary.chapter === chapter - 1,
  );
  const nextChapter = chapterInfo.find(
    (chapterSummary) => chapterSummary.chapter === chapter + 1,
  );

  const lastPage = page === myChapter.pages;
  const firstPage = page === 1;

  // Navigation links
  const beginningOfChapter = (
    <ComicNavLink
      disabled={firstPage}
      title="Beginning of Chapter"
      to={`/${getComicPath(myChapter.chapter, 1)}`}
    >
      <AiOutlineDoubleLeft />
    </ComicNavLink>
  );

  const prevPage = (
    <ComicNavLink
      disabled={firstPage && !prevChapter}
      title="Previous Page"
      to={`/${
        firstPage
          ? prevChapter
            ? getComicPath(prevChapter.chapter, prevChapter.pages)
            : ''
          : getComicPath(myChapter.chapter, page - 1)
      }`}
    >
      <AiOutlineLeft
        css={css`
          margin-right: 1.5rem;
        `}
      />
    </ComicNavLink>
  );

  const nextPage = (
    <ComicNavLink
      disabled={lastPage && !nextChapter}
      title="Next Page"
      to={`/${
        lastPage
          ? nextChapter
            ? getComicPath(nextChapter.chapter, 1)
            : ''
          : getComicPath(myChapter.chapter, page + 1)
      }`}
    >
      <AiOutlineRight />
    </ComicNavLink>
  );

  const endOfChapter = (
    <ComicNavLink
      disabled={lastPage}
      title="End of Chapter"
      to={`/${getComicPath(myChapter.chapter, myChapter.pages)}`}
    >
      <AiOutlineDoubleRight />
    </ComicNavLink>
  );

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {beginningOfChapter}
      {prevPage}
      <ArwesSelect
        title={'Select chapter'}
        value={
          chapterOptions.find((chapter) => chapter.value === myChapter.chapter)
            ?.value
        }
        onChange={(value: number) => navigate(`/${getComicPath(value, 1)}`)}
        options={chapterOptions}
      />
      {nextPage}
      {endOfChapter}
    </div>
  );
};
