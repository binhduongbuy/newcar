import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import howGatsbyWorksImg from '../img/how-gatsby-works.png'
import graphqlLogo from '../img/graphql-logo.png'
import gatsbyLogo from '../img/gatsby-logo.png'
import reactLogo from '../img/react-logo.png'

const Wrapper = styled.div`
  margin: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const FlexBasis100 = styled.div`
  flex-basis: 100%;
`
const Title = styled.h1`
  margin: 36px 0;
`
const GraphqlLogo = styled.img`
  width: 136px;
  margin-bottom: -16px !important;
`
const ReactLogo = styled.img`
  width: 136px;
  margin: 0 0 -16px 0;
`
const GatsbyLogo = styled.img`
  height auto;
`
const HowGatsbyWorksImg = styled.img`
  padding: 20px;
`
const PurpleFont = styled.span`
  color: rebeccapurple;
  font-weight: 600;
`

const IndexPage = () => (
  <Wrapper>
  <GatsbyLogo src={ gatsbyLogo } alt="Gatsby Logo" />
    <Title>A static site generator for <ReactLogo src={ reactLogo } alt="React Logo" /></Title>
    <p><PurpleFont>Gatsby</PurpleFont> allows you to use modern web development technologies to make serverless static sites.</p>
    <p>You can use it with <GraphqlLogo src={ graphqlLogo } /> to pull data from basically any where. A headless CMS or SaaS services even APIs and databases.</p>
    <p>What really makes <PurpleFont>Gatsby</PurpleFont> awesome is that it's an implementation of a new trendy stack the hipsters refer to as the JAMstack ¯\_(ツ)_/¯</p>
    <HowGatsbyWorksImg src={ howGatsbyWorksImg } alt="How Gatsby works image"/>
    <FlexBasis100>
    <h3>JAMstack</h3>
    <p><i>noun \’jam-stak’\</i></p>
    </FlexBasis100>
    <p> Modern web development architecture based on client-side JavaScript, reusable ApIs, and prebuilt Markup.</p>
    <p>learn more @ <a href="https://jamstack.org" target="_blank">jamstack.org</a></p>
  </Wrapper>
)

export default IndexPage
