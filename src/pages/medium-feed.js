import React from "react"
import styled from 'styled-components'
import logo from '../img/dailyjs.png'

const Wrapper = styled.div`
    margin: 64px 0;
`
const Post = styled.div`
    border: 2px solid #d4d4d4;
    margin: 24px 0;
    padding: 16px;
`
const Logo = styled.img`
    width: 360px;
`
const Title = styled.h1`
    margin-top: 36px;
`
const LinkText = styled.a`
  text-decoration: none;
  color: #5c8ef2;
  ${ LinkText }:hover {
    text-decoration: underline;
  }
`
const Info = styled.div`
    line-height: 1;
    font-size: 14px;
`

export default ({ data }) => {
  return (
    <Wrapper>
    <Logo src={ logo } />
    {data.allMediumPost.edges.map(({ node }, index) => 
        <Post key={index}>
            <div>
                <Title><LinkText href={ `https://medium.com/dailyjs/${ node.slug }-${ node.id }` }>{ node.title }</LinkText></Title>
            </div>
            <Info>
                <h3>{ node.virtuals.subtitle }</h3>
                <p>By: { node.author.name }</p>
                <p>{ Math.ceil(node.virtuals.readingTime) } minute read</p>
                <p>Claps: { node.virtuals.totalClapCount }</p>
            </Info>
            <div>
                <a href={`https://medium.com/hackernoon/${ node.slug }-${ node.id }`}><img src={`https://cdn-images-1.medium.com/max/1000/${node.virtuals.previewImage.imageId}`} /></a>
            </div>
        </Post>
    )}
    </Wrapper>
  )
}

export const query = graphql`
query StoriesQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            slug
            id
            title
            virtuals {
              subtitle
              readingTime
              totalClapCount
              previewImage {
                imageId
              }
            }
            author {
              name 
            }
          }
        }
      } 
    }
`
