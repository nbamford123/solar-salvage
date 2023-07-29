import { graphql, useStaticQuery } from 'gatsby';

import { getCurrentDate } from '../util/getCurrentDate';
import { makePost, Post } from '../types';

/*
 * Get the most recent 4 blog posts
 */
export const useLatestBlogs = (): Array<Post> => {
  const data: GatsbyTypes.PostQuery =
    useStaticQuery<GatsbyTypes.PostQuery>(graphql`
      query Post {
        allMdx(
          filter: { frontmatter: { type: { eq: "blog" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            frontmatter {
              title
              author
              date
            }
            fields {
              slug
            }
            body
          }
        }
      }
    `);
  // Only return posts that are current
  const validPosts = data.allMdx.nodes
    .filter((n) => {
      return (
        n.frontmatter?.date &&
        new Date(n.frontmatter.date) <= new Date(getCurrentDate())
      );
    })
    .slice(0, 4);
  return validPosts.map((postMdx) => makePost(postMdx));
};
