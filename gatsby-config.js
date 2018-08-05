module.exports = {
  siteMetadata: {
    title: "Dorian's Super Cool Gatsby Site",
  },
  pathPrefix: `/dorians-super-cool-gatsby-site`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-source-hacker-news',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `binhduongbuy@gmail.com`,
      },
    },
  ],
};
