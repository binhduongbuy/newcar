import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment';

const BlogPage = ({data}) => (
  <div className='grid-wrapper' id='blog'>
    <div className='col-12' style={{marginTop: '40px'}}>
    {data.allMarkdownRemark.edges.sort((a , b) =>  new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date))
    .map(post => (
        <div className='mt-5' key={post.node.id}>
            <Link to={`/${post.node.frontmatter.templateKey}/${post.node.frontmatter.title}`}>
                <h2 className='blog-title'>{post.node.frontmatter.title}</h2>
            </Link>
            <div className='blog-date'>
                <div><span className='icon fa-calendar'></span></div>
                <div><span>{moment(post.node.frontmatter.date).format('ll')}</span></div>
            </div>
            {
                (post.node.frontmatter.image !== null) ? (
                    <img src={post.node.frontmatter.image} alt='' />
                ) : ( <span></span>)
            }
            <br />
            <div className='blog-desc'>
            {post.node.excerpt}
                <div className='blog-button'>
                    <Link to={`/${post.node.frontmatter.templateKey}/${post.node.frontmatter.title}`}>
                        <button className='myButton'>Read More</button>
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    ))}
    </div>
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "blog" } }}
        ) {
            edges {
                node {
                    id
                    html
                    excerpt
                    frontmatter {
                        templateKey
                        title
                        date
                        image
                    }
                }
            }
        }
    }
`
export default BlogPage

