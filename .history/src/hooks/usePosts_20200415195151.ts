import { graphql, useStaticQuery } from 'gatsby';
import { PostQuery } from '../../graphql-types';
import ImageSharpFluid from 'gatsby-image';

interface Post {
  title: string;
  author: string;
  slug: string;
  image?: ImageSharpFluid;
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
    image: post.frontmatter.image ?? udnefined,
    excerpt: post?.excerpt || '',
  }));
};
export default usePosts;
