module.exports = {
  siteMetadata: {
    title: `Cody Wall`,
    description: `Hi! I'm Cody Wall. I am a front end web developer based out of Monterey, California.
    I love building websites using modern frameworks and technologies, and strive to improve the
    web experience for everyone.`,
    author: `@codywall`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#0471a6`,
        theme_color: `#0471a6`,
        display: `fullscreen`,
        icon: `src/images/favicon-cody.png`
      }
    }
  ]
};
