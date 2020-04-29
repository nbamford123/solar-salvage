import { graphql, useStaticQuery } from 'gatsby';
import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  ImageSharpFixed,
  LatestComicQuery,
} from '../../graphql-types';

interface Comic {
  chapter: number;
  page: number;
  posted: Date;
  comic?: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    sharp?: { fixed?: ImageSharpFixed | null } | null;
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
    comic: comicMdx.frontmatter?.comic ?? undefined,
    note: comicMdx?.body || '',
  };
};
