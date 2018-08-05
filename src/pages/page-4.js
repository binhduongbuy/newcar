import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import graphiqlImg from '../img/graphiql.png'
import graphqlCode from '../img/graphql-code.png'

const Wrapper = styled.div`
    margin: 64px 0;
`
const Title = styled.h1`
    color: rebeccapurple;
    text-align: center;
    margin-bottom: 64px;
`
const SecondaryTitle = styled.h2`
    font-size: 32px;
`
const Code = styled.code`
    font-size: 16px;
    margin-bottom: 64px;
    padding: 10px;
`
const LinkText = styled.a`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: #5c8ef2;
`
const PinkText = styled.span`
    color: #E10098;
`
const PurpleText = styled.span`
    color: rebeccapurple;
`

const ForthPage = () => (
    <Wrapper>
        <Title><PurpleText>Gatsby</PurpleText> with <PinkText>GraphQL</PinkText> === <PurpleText>Awe</PurpleText><PinkText>some</PinkText></Title>
        <p>Gatsby’s data layer lets us pull data from file types like Markdown, CSV, JSON, etc. As well as databases and APIs of all sorts directly into our components in the shape and form we want.</p>
        <p>In my working examples I will be pulling data from a couple of Gatsby source plugins.</p>
        <p> Doing that is as easy as running:</p> 
        <p><Code>npm install --save gatsby-source-hackernews</Code></p>
        <p>Adding it you your</p>
        <p><Code>gatsby-config.js</Code></p>
        <p><Code>{`module.exports = { plugins: [ 'gatsby-source-hacker-news'] }`}</Code></p>
        <p>Restart your development server and go to:</p>
        <p><Code>localhost:8000/___graphql</Code></p>
        <p>Here you'll find the GraphQL GUI Graph<i>i </i>QL</p>
        <img src={ graphiqlImg } />
        <p>You can sketch out the data query by playing in GraphiQL then copy it to a React page component to start building the UI.</p>
        <img src={ graphqlCode } />        
        <p>The shape of the data will match the shape of the query.</p>
        <SecondaryTitle>The magic behind <PurpleText>Gatsby</PurpleText> and <PinkText>GraphQL</PinkText></SecondaryTitle>
        <p>We used a tag function called graphql, but we don't need to import a graphql tag.</p>
        <p>That's because this is part of the Gatsby magic that happens during the build process, where GraphQL queries are pulled out of the original source for parsing.</p>
         <p>Gatsby borrows a technique from Relay that converts our source Code into an abstract syntax tree (AST) during the build step. 
        All graphql-tagged templates are found in file-parser.js and query-compiler.js, which effectively removes them from the original source Code. 
        This means that the graphql tag isn’t executed the way that we might expect, which is why there’s no error, despite the fact that we’re technically using an undefined tag in our source.</p>
        <p>Along with most of the content and information on this site, this explanation was also stolen from <a href={ `https://gatsbyjs.org` }>gatsbyjs.org</a></p>
    </Wrapper>
)

export default ForthPage
