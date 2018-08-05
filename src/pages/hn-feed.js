import React from "react"
import styled from 'styled-components'
import hnLogo from '../img/hn-logo.png'

const TitleFont = styled.p`
  color: #FC6204;
`
const ArticleLink = styled.a`
  text-decoration: none;
  color: #5c8ef2;
`
const HnLogo = styled.img`
  margin-bottom: -32px;
`

export default ({ data }) => {
  return (
    <div>
      <HnLogo src={ hnLogo } />
        <h1>Hacker News Feed</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Score</th>
            <th>Link to Article</th>
          </tr>
        </thead>
        <tbody>
          {data.allHnStory.edges.map(({ node }, index) =>
            <tr key={ index }>
              <td><TitleFont>{ node.title }</TitleFont></td>
              <td>{ node.by }</td>
              <td>{ node.score }</td>
              <td><a href={ node.url } target="_blank"><ArticleLink>Read Now</ArticleLink></a></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
query HackerNewsQuery {
  allHnStory(sort: {fields: [score] order: DESC}) {
    edges {
      node {
        title
        by
        score
        url
      }
    }
  }
}
`
