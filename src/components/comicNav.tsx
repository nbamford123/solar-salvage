/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';

import { useChapterSummaries } from '@/hooks/useChapterSummaries';
import { getComicPath } from '@/util/getComicPath';

export interface ComicNavProps {
  chapter: number;
  page: number;
}

const baseLink = css({
  display: 'inlineBlock',
  fontSize: '1.25rem',
  marginRight: '0.5rem',
});

const NavLink = styled(Link)(baseLink);
const DisabledNavLink = styled.label(baseLink, {
  color: 'lightgrey',
  textDecoration: 'underline',
});

// TODO: Maybe tippy or a real tooltip?
export const ComicNav: React.FC<ComicNavProps> = ({ chapter, page }) => {
  // Fetch all the chapters
  const chapterInfo = useChapterSummaries();

  // Chapters for select nav
  const chapterOptions = chapterInfo.map((chapter) => (
    <option
      key={chapter.chapter}
      value={chapter.chapter}
    >{`${chapter.chapter} ${chapter.title}`}</option>
  ));

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
  const beginningOfChapter = firstPage ? (
    <DisabledNavLink title="Beginning of Chapter">&lt;&lt;</DisabledNavLink>
  ) : (
    <NavLink
      title="Beginning of Chapter"
      to={getComicPath(myChapter.chapter, 1)}
    >
      &lt;&lt;
    </NavLink>
  );
  const prevPage =
    firstPage && !prevChapter ? (
      <DisabledNavLink title="Previous Page">&lt;</DisabledNavLink>
    ) : (
      <NavLink
        title="Previous Page"
        to={
          firstPage
            ? prevChapter
              ? getComicPath(prevChapter.chapter, prevChapter.pages)
              : ''
            : getComicPath(myChapter.chapter, page - 1)
        }
      >
        &lt;
      </NavLink>
    );
  const nextPage =
    lastPage && !nextChapter ? (
      <DisabledNavLink title="Next Page">&gt;</DisabledNavLink>
    ) : (
      <NavLink
        title="Next Page"
        to={
          lastPage
            ? nextChapter
              ? getComicPath(nextChapter.chapter, 1)
              : ''
            : getComicPath(myChapter.chapter, page + 1)
        }
      >
        &gt;
      </NavLink>
    );

  const endOfChapter = lastPage ? (
    <DisabledNavLink title="End of Chapter">&gt;&gt;</DisabledNavLink>
  ) : (
    <NavLink
      title="End of Chapter"
      to={getComicPath(myChapter.chapter, myChapter.pages)}
    >
      &gt;&gt;
    </NavLink>
  );

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        * {
          margin-top: 0;
        }
      `}
    >
      {beginningOfChapter}
      {prevPage}
      <select
        css={css`
          margin-right: 0.5rem;
        `}
        title={'Select chapter'}
        value={myChapter.chapter}
        onChange={(e) => navigate(getComicPath(e.target.value, 1))}
      >
        {chapterOptions}
      </select>
      {nextPage}
      {endOfChapter}
    </div>
  );
};
