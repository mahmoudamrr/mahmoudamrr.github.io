const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog.tsx`)
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 20
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: '/first-article',
      component: blogPostTemplate,
      context: {}
    })
  })
}