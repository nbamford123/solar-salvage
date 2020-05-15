import { graphql, useStaticQuery } from 'gatsby';
import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  PostQuery,
} from '../../graphql-types';
import { makePost, Post } from '../types';

const usePosts = (): Array<Post> => {
  const data: PostQuery = useStaticQuery(graphql`
    query Post {
      allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          body
        }
      }
    }
  `);
  return data.allMdx.nodes.map(postMdx => makePost(postMdx));
};
export default usePosts;
