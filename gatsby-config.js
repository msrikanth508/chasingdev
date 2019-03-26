module.exports = {
  siteMetadata: {
    title: 'Technical blog',
    description: "My name is Srikanth, I write about tech on my blog. I'am passionate about web.",
    author: 'Srikanth',
    siteUrl: 'https://chasingdev.me',
    twitterUserName: '_srikanthm_'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`, 
  ],
}
