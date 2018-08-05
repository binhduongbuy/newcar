import React from 'react'
import Link from 'gatsby-link'

const NewsPage = ({data}) => (
  <div>
    <h1 className='mb-5'>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div className='mt-5' key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <Link to={`/${post.node.frontmatter.templateKey}/${post.node.frontmatter.title}`}>Read more</Link>
        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
    query NewsIndexQuery {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "news" } }}
        ) {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        templateKey
                        title
                        link
                    }
                }
            }
        }
    }
`
export default NewsPage

