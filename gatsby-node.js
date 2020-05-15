const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ getNode, node, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === `Mdx` &&
    (node.frontmatter.type === 'comic' || node.frontmatter.type === 'blog')
  ) {
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
      allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          frontmatter {
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  if (blogPosts.errors) {
    reporter.panic('failed to create posts', blogPosts.errors);
  }

  const posts = blogPosts.data.allMdx.nodes;
  posts.forEach(post => {
    actions.createPage({
      path: post.fields.slug,
      component: require.resolve('./src/templates/blogTemplate.tsx'),
      context: {
        date: `${post.frontmatter.date}`,
        slug: post.fields.slug,
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
  comics.forEach(comic => {
    actions.createPage({
      path: comic.fields.slug,
      component: require.resolve('./src/templates/comicTemplate.tsx'),
      context: {
        chapter: comic.frontmatter.chapter,
        page: comic.frontmatter.page,
        slug: comic.fields.slug,
      },
    });
  });
};
