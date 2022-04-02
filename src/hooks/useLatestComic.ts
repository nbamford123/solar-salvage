import { graphql, useStaticQuery } from 'gatsby';

import { Comic, makeComic } from '../types';

export const useLatestComic = (): Comic => {
  const data: GatsbyTypes.LatestComicQuery =
    useStaticQuery<GatsbyTypes.LatestComicQuery>(graphql`
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
                childImageSharp {
                  gatsbyImageData(width: 900, height: 1350, layout: FIXED)
                }
              }
            }
            fields {
              slug
            }
            body
          }
        }
      }
    `);

  const comicMdx = data.allMdx.nodes[0];
  return makeComic(comicMdx);
};
