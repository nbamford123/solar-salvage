module.exports = {
  siteMetadata: {
    title: 'Solar Salvage',
    description: 'A science fiction webcomic',
    author: 'nbamford',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'comics',
        path: 'comics',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chapter-thumbs',
        path: 'comics/chapter-images',
      },
    },
  ],
};
