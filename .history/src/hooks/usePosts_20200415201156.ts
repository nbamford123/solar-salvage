import { graphql, useStaticQuery } from 'gatsby';
import {
    // eslint-disable-next-line @typescript-eslint/camelcase
    GatsbyImageSharpFluid_WithWebpFragment,
  PostQuery,
} from '../../graphql-types';

interface Post {
  title: string;
  author: string;
  slug: string;
  image?: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    sharp?: { fluid?: GatsbyImageSharpFluid_WithWebpFragment | null } | null;
  };
  excerpt: string;
}

const usePosts = (): Array<Post> => {
  const data: PostQuery = useStaticQuery(graphql`
    query Post {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter?.title || '',
    author: post.frontmatter?.author || '',
    slug: post.frontmatter?.slug || '',
    image: post.frontmatter?.image ?? undefined,
    excerpt: post?.excerpt || '',
  }));
};
export default usePosts;
