exports.createPages = async ({ actions, graphql, reporter }) => {
  const blogPosts = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          frontmatter {
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
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/blogTemplate.tsx'),
      context: {
        slug: `${post.frontmatter.slug}`,
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
      path: `${comic.frontmatter.chapter}-${comic.frontmatter.page}`,
      component: require.resolve('./src/templates/comicTemplate.tsx'),
      context: {
        chapter: comic.frontmatter.chapter,
        page: comic.frontmatter.page,
      },
    });
  });
};
