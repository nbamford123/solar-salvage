import { graphql, useStaticQuery } from 'gatsby';

import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  ChapterInfoQuery,
} from '../../graphql-types';
import { ChapterSummary } from '../types';

interface PageMdx {
  frontmatter?: {
    chapter?: number | null;
  } | null;
}
interface ChapterMdx {
  chapter?: number | null;
  title?: string | null;
  writtenBy?: string | null;
}
// Map from chapter to number of pages for easier lookup
interface PageMap {
  [key: number]: number;
}

// Get comics and chapters and return chapter info array
export const chapterSummary = (): ChapterSummary[] => {
  const data: ChapterInfoQuery = useStaticQuery(graphql`
    query ChapterInfo {
      pages: allMdx(filter: { frontmatter: { type: { eq: "comic" } } }) {
        nodes {
          frontmatter {
            chapter
          }
        }
      }
      chapters: allMdx(filter: { frontmatter: { type: { eq: "chapter" } } }) {
        nodes {
          frontmatter {
            type
            chapters {
              chapter
              title
              writtenBy
            }
          }
        }
      }
    }
  `);

  const pageMap = data.pages.nodes.reduce((pv: PageMap, cv: PageMdx) => {
    const chapter = cv?.frontmatter?.chapter;
    return chapter
      ? {
          ...pv,
          [chapter]: pv[chapter] ? ++pv[chapter] : 1,
        }
      : pv;
  }, {});

  const chapters =
    (data.chapters.nodes.length &&
      data.chapters.nodes[0]?.frontmatter?.chapters) ||
    [];

  const chapterSummary = chapters.reduce(
    (pv: Array<ChapterSummary>, cv: ChapterMdx | null) => [
      ...pv,
      ...(cv && cv.chapter
        ? [
            {
              chapter: cv.chapter || 0,
              title: cv.title || '',
              writtenBy: cv.writtenBy || '',
              pages: pageMap[cv.chapter] || 0,
            },
          ]
        : []),
    ],
    [],
  );

  return chapterSummary;
};
