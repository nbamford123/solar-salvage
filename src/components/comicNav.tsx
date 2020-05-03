import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';

import { chapterSummary } from '../hooks/chapterSummary';

export interface ComicNavProps {
  chapter: number;
  page: number;
}

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
  // next page
  const nextPage =
    page + 1 > myChapter.pages
      ? nextChapter
        ? {
            page: 1,
            chapter: nextChapter.chapter,
          }
        : {
            page: page,
            chapter: chapter,
          }
      : {
          page: page + 1,
          chapter: chapter,
        };

  // previous page
  const previousPage =
    page - 1 < 1
      ? prevChapter
        ? {
            page: prevChapter.pages,
            chapter: prevChapter.chapter,
          }
        : {
            page: page,
            chapter: chapter,
          }
      : {
          page: page - 1,
          chapter: chapter,
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
      <NavLink to={`${chapter}-1`}>&lt;&lt;</NavLink>
      <NavLink to={`${previousPage.chapter}-${previousPage.page}`}>
        &lt;
      </NavLink>
      <select
        css={css`
          margin-right: 1rem;
        `}
        value={myChapter.chapter}
        onChange={e => navigate(`${e.target.value}-1`)}
      >
        {chapterOptions}
      </select>
      <NavLink to={`${nextPage.chapter}-${nextPage.page}`}>&gt;</NavLink>
      <NavLink to={`${chapter}-${myChapter.pages}`}>&gt;&gt;</NavLink>
    </div>
  );
};
