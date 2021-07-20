const { createFilePath } = require(`gatsby-source-filesystem`);
const { getComicPath } = require('./src/util/getComicPath');

exports.onCreateNode = ({ getNode, node, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === `Mdx` &&
    (node.frontmatter.type === 'comic' || node.frontmatter.type === 'blog')
  ) {
    // Don't really want this for comics, it makes navigation too difficult, but it is a cool trick,
    // so I'm leaving it here
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPosts = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (blogPosts.errors) {
    reporter.panic('failed to create posts', blogPosts.errors);
  }

  const posts = blogPosts.data.allMdx.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/blogListTemplate.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const comicPosts = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "comic" } } }) {
        nodes {
          frontmatter {
            chapter
            page
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  if (comicPosts.errors) {
    reporter.panic('failed to create comics', comicPosts.errors);
  }

  const comics = comicPosts.data.allMdx.nodes;
  comics.forEach((comic) => {
    actions.createPage({
      path: getComicPath(comic.frontmatter.chapter, comic.frontmatter.page),
      component: require.resolve('./src/templates/comicTemplate.tsx'),
      context: {
        chapter: comic.frontmatter.chapter,
        page: comic.frontmatter.page,
        slug: comic.fields.slug,
      },
    });
  });
};
