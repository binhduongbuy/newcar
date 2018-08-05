import React from 'react'
import Link from 'gatsby-link'


export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div className='grid-wrapper' id='blog'>
      <div className='col-12'>
        {
          post.frontmatter.image !== '' ? (
            <img src={post.frontmatter.image} />
          ) : (
            <div></div>
          )
        }
        <div className='blog-content'>
          <h1>{post.frontmatter.title}</h1>
          <h4>
            {post.frontmatter.date}
          </h4>
          <div className='posta' dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        date
        image
      }
    }
  }
`

