import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  LatestComicQuery,
} from '../../graphql-types';

interface Comic {
  chapter: number;
  page: number;
  posted: Date;
  comic?: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    sharp?: { fixed?: FixedObject | null } | null;
  };
  note: string;
}

export const latestComic = (): Comic => {
  const data: LatestComicQuery = useStaticQuery(graphql`
    query LatestComic {
      allMdx(filter: { frontmatter: { type: { eq: "comic" } } }) {
        nodes {
          frontmatter {
            chapter
            page
            posted
            comic {
              sharp: childImageSharp {
                fixed(width: 600, height: 900) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          body
        }
      }
    }
  `);

  const comicMdx = data.allMdx.nodes[0];
  return {
    chapter: comicMdx.frontmatter?.chapter || 0,
    page: comicMdx.frontmatter?.page || 0,
    posted: comicMdx.frontmatter?.posted,
    // This sucks, but there's no way to coerce graphql into returning the appropriate type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comic: (comicMdx.frontmatter?.comic ?? undefined) as any,
    note: comicMdx?.body || '',
  };
};
