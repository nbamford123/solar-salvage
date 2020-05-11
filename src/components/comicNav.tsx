import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';

import { chapterSummary } from '../hooks/chapterSummary';

export interface ComicNavProps {
  chapter: number;
  page: number;
}

// TODO: Fix this-- make stuff disabled when they don't make sense instead of changing functionality
// Also, maybe tippy or a real tooltip?
const NavLink = styled(Link)`
  display: inline-block;
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

export const ComicNav: React.FC<ComicNavProps> = ({ chapter, page }) => {
  const chapterInfo = chapterSummary();
  // Get the chapters for the select nav
  const chapterOptions = chapterInfo.map(chapter => (
    <option
      key={chapter.chapter}
      value={chapter.chapter}
    >{`${chapter.chapter} ${chapter.title}`}</option>
  ));

  // Current chapter
  const myChapter = chapterInfo.find(
    chapterSummary => chapterSummary.chapter === chapter,
  ) || { chapter: 1, pages: 0 };
  // prev, next chapters, if they exist
  const prevChapter = chapterInfo.find(
    chapterSummary => chapterSummary.chapter === chapter - 1,
  );
  const nextChapter = chapterInfo.find(
    chapterSummary => chapterSummary.chapter === chapter + 1,
  );
  // next page, maybe next chapter
  const nextPageNav =
    page + 1 > myChapter.pages
      ? nextChapter
        ? {
            page: 1,
            chapter: nextChapter.chapter,
            text: 'Next chapter',
          }
        : {
            page: page,
            chapter: chapter,
            text: 'Last page',
          }
      : {
          page: page + 1,
          chapter: chapter,
          text: 'Next page',
        };

  // previous page, maybe previous chapter
  const previousPageNav =
    page - 1 < 1
      ? prevChapter
        ? {
            page: prevChapter.pages,
            chapter: prevChapter.chapter,
            text: 'Previous chapter',
          }
        : {
            page: page,
            chapter: chapter,
            text: 'First page',
          }
      : {
          page: page - 1,
          chapter: chapter,
          text: 'Previous page',
        };

  // Last page in chapter, or first page in next chapter if already there
  const lastPageNav =
    page === myChapter.pages
      ? {
          chapter: nextChapter ? nextChapter.chapter : chapter,
          page: nextChapter ? 1 : page,
          text: nextChapter ? 'Next chapter' : 'End of chapter',
        }
      : {
          chapter: chapter,
          page: myChapter.pages,
          text: 'End of chapter',
        };

  // First page in chapter, or last page in previous chapter if already there
  const firstPageNav =
    page === 1
      ? {
          chapter: prevChapter ? prevChapter.chapter : chapter,
          page: prevChapter ? prevChapter.pages : page,
          text: prevChapter ? 'Previous chapter' : 'Beginning of chapter',
        }
      : {
          chapter: chapter,
          page: 1,
          text: 'Beginning of chapter',
        };

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
      <NavLink
        title={firstPageNav.text}
        to={`${firstPageNav.chapter}-${firstPageNav.page}`}
      >
        &lt;&lt;
      </NavLink>
      <NavLink
        title={previousPageNav.text}
        to={`${previousPageNav.chapter}-${previousPageNav.page}`}
      >
        &lt;
      </NavLink>
      <select
        css={css`
          margin-right: 0.5rem;
        `}
        title={'Select chapter'}
        value={myChapter.chapter}
        onChange={e => navigate(`${e.target.value}-1`)}
      >
        {chapterOptions}
      </select>
      <NavLink
        title={nextPageNav.text}
        to={`${nextPageNav.chapter}-${nextPageNav.page}`}
      >
        &gt;
      </NavLink>
      <NavLink
        title={lastPageNav.text}
        to={`${lastPageNav.chapter}-${lastPageNav.page}`}
      >
        &gt;&gt;
      </NavLink>
    </div>
  );
};
