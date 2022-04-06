import { graphql, useStaticQuery } from 'gatsby';
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
          limit: 4
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
  console.log(data.allMdx.nodes[0].frontmatter);
  return data.allMdx.nodes.map((postMdx) => makePost(postMdx));
};
