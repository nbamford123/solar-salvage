module.exports = {
  siteMetadata: {
    title: 'Solar Salvage',
    description: 'A science fiction webcomic',
    author: 'nbamford',
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [{
    resolve: `gatsby-plugin-csp`,
    directives: {
      "style-src": "'self' 'https://netlify-cdp-loader.netlify.app'",
    }
  }
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `solarsalvage`,
      },
    },
    // No need to run this every time and it always makes prettier mad
    // {
    //   resolve: 'gatsby-plugin-typegen',
    //   options: {
    //     outputPath: 'src/__generated__/gatsby-types.d.ts',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-jss-provider',
      options: {
        minify: true,
        minifyConfig: {
          restructure: false,
          comments: false,
        },
      },
    },
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
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: 'images',
    //   },
    // },
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
