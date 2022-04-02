import { graphql, useStaticQuery } from 'gatsby';

import { ChapterMdx, ChapterSummary } from '../types';

interface PageMdx {
  frontmatter?: {
    chapter?: number | null;
  } | null;
}
// Map from chapter to number of pages for easier lookup
interface PageMap {
  [key: number]: number;
}

// Get comics and chapters and return chapter info array
export const useChapterSummaries = (): ChapterSummary[] => {
  const data: GatsbyTypes.ChapterInfoQuery =
    useStaticQuery<GatsbyTypes.ChapterInfoQuery>(graphql`
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
                synopsis
                title
                thumb {
                  childImageSharp {
                    gatsbyImageData(width: 200, height: 200, layout: FIXED)
                  }
                }
                writtenBy
              }
            }
          }
        }
      }
    `);

  // It seems kind of pointless to generate this every time you need a summary, also I bet graphql could do it
  const pageMap = data.pages.nodes.reduce((pv: PageMap, cv: PageMdx) => {
    const chapter = cv?.frontmatter?.chapter;
    return chapter
      ? {
          ...pv,
          [chapter]: pv[chapter] ? ++pv[chapter] : 1,
        }
      : pv;
  }, {});

  const chapters: Array<ChapterSummary> = (
    data.chapters.nodes.length
      ? data.chapters.nodes[0].frontmatter?.chapters ?? []
      : []
  ).filter((c) => c) as Array<ChapterSummary>;

  const chapterSummary = chapters.reduce(
    (pv: Array<ChapterSummary>, cv: ChapterMdx | null) => [
      ...pv,
      ...(cv && cv.chapter
        ? [
            {
              chapter: cv.chapter || 0,
              synopsis: cv.synopsis || '',
              // If there's a typescript way to deal with these, I can't find it
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              thumb: cv.thumb as any,
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
