/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Gilbertly.com',
    commit: `Commit #${process.env.GIT_HASH}`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gilbertly Portfolio',
        short_name: 'Gilbertly',
        orientation: 'portrait',
        display: 'standalone',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#070707',
        icon: 'src/assets/img/avatarProfile.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
