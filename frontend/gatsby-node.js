const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query GetPosts {
      allStrapiPost {
        nodes {
          title
          description {
            data {
              description
            }
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 500, width: 720)
              }
            }
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.jsx`)
  queryResults.data.allStrapiPost.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.title.replaceAll(' ', '-').toLowerCase()}`,
      component: postTemplate,
      context:  node,
    })
  })
}