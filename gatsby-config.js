module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `https://github.com/binhduongbuy/newcar/src/pages/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `https://github.com/binhduongbuy/newcar/static/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `https://github.com/binhduongbuy/newcar/src/pages/news`,
        name: 'news'
      }
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-remark',
    'gatsby-remark-copy-linked-files'
  ],
}
