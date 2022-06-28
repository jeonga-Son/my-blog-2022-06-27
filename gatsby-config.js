module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "손정아의 개발 블로그",
    description: "이 사이트에 개발자 손정아의 개발일지가 담겨있습니다.",
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};