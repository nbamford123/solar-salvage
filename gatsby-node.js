const { createFilePath } = require(`gatsby-source-filesystem`);
const { getComicPath } = require('./src/util/getComicPath');
const { getCurrentDate } = require('./src/util/getCurrentDate');

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

exports.onCreatePage = ({ page, actions }) => {
  // Put the current data in the page context so we can filter
  // for only current pages
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: getCurrentDate(),
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPosts = await graphql(`
    query allBlogs($currentDate: Date) {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "blog" }, date: { lte: $currentDate } }
        }
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
    query allComics($currentDate: Date) {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "comic" }, posted: { lte: $currentDate } }
        }
      ) {
        nodes {
          frontmatter {
            chapter
            page
            posted
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter implements Node {
      chapter: Int
      comic: File @fileByRelativePath
      page: Int
      posted: Date
    }
  `;
  createTypes(typeDefs);
};
