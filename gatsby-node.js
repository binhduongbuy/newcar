const _ = require('lodash')
const path = require('path')
//const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
                templateKey
                title
                date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `/${edge.node.frontmatter.templateKey}/${edge.node.frontmatter.title}`,
        component: path.resolve(
          `src/templates/blog.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })

    })
  })
}
