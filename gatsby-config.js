/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Gilbertly.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gilbertly.com',
        short_name: 'Gilbertly.com',
        orientation: 'portrait',
        display: 'standalone',
        start_url: '/',
        background_color: '#e6f7ff',
        theme_color: '#e6f7ff',
        icon: 'src/assets/img/avatarProfile.png',
      },
    },
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
