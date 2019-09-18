/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Fullstack Bootcamp',
    author: 'Varoon Silochan'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
    'gatsby-transformer-remark'
  
  ]

  
}
