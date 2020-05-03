import { graphql, useStaticQuery } from 'gatsby';

import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  LatestComicQuery,
} from '../../graphql-types';
import { Comic, makeComic } from '../types';

export const latestComic = (): Comic => {
  const data: LatestComicQuery = useStaticQuery(graphql`
    query LatestComic {
      allMdx(
        sort: {
          fields: [
            frontmatter___posted
            frontmatter___chapter
            frontmatter___page
          ]
          order: [DESC, DESC, DESC]
        }
        filter: { frontmatter: { type: { eq: "comic" } } }
        limit: 1
      ) {
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
  return makeComic(comicMdx);
};
