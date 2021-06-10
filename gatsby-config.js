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
		 resolve: `gatsby-remark-highlight-code`
	},
    {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
		aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },
            escapeEntities: {},
          },
     },
  ],
}
