import { graphql, useStaticQuery } from 'gatsby';

import { Comic, makeComic } from '../types';
import { getCurrentDate } from '../util/getCurrentDate';

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
        ) {
          nodes {
            frontmatter {
              chapter
              page
              posted
              comic {
                childImageSharp {
                  gatsbyImageData(width: 900, height: 1350)
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

  const latestComicIndex = data.allMdx.nodes.findIndex((n) => {
    return (
      n.frontmatter?.posted &&
      new Date(n.frontmatter.posted) <= new Date(getCurrentDate())
    );
  });
  console.log(data.allMdx.nodes[latestComicIndex]);
  return makeComic(data.allMdx.nodes[latestComicIndex]);
};
