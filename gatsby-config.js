module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Persistence`,
    author: `David`,
    description: `A collection of my study notes and thoughts`,
    social: [
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
	resolve: `gatsby-transformer-remark`,
	    options: {
		plugins:[
			{
			  resolve: `gatsby-remark-prismjs`,
			  options: {
			    classPrefix: "language-",
			    inlineCodeMarker: null,
				aliases: {},
			    showLineNumbers: true,
			    noInlineHighlight: false,
			    escapeEntities: {},
			  },
			}
		]
     }
    }
  ],
}
