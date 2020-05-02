import { graphql, useStaticQuery } from 'gatsby';

import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  AllComicsQuery,
} from '../../graphql-types';
import { ChapterSummary } from '../types';

export interface ChapterMdx {
  frontmatter?: {
    chapter?: number | null;
  } | null;
}
// Get every comic and return a map from chapter number to page count
export const chapterSummary = (): ChapterSummary => {
  const data: AllComicsQuery = useStaticQuery(graphql`
    query AllComics {
      allMdx(filter: { frontmatter: { type: { eq: "comic" } } }) {
        nodes {
          frontmatter {
            chapter
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.reduce((pv: ChapterSummary, cv: ChapterMdx) => {
    const chapter = cv?.frontmatter?.chapter;
    return chapter
      ? {
          ...pv,
          [chapter]: pv[chapter] ? pv[chapter]++ : 1,
        }
      : pv;
  }, {});
};
