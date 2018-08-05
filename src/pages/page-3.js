import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import graphqlLogo from '../img/graphql-logo.png'
import graphqlExample from '../img/graphql-example.png'

const Wrapper = styled.div`
  margin: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Title = styled.h1`
    color: rebeccapurple;
    text-align: center;
    margin-bottom: 64px;
`
const P = styled.p`
    width: 600px;
`
const ListTitle = styled.h3`
    font-size: 32px;
    margin: 36px 0;
`
const List = styled.ul`
    padding: 20px;
    list-style-type: none;
`
const ListItem = styled.li`
    font-size: 20px;
`
const GraphqlExample = styled.img`
    height: auto;
`
const PinkText = styled.span`
    color: #E10098;
`
const PurpleText = styled.span`
    color: rebeccapurple;
`
const BoldText = styled.span`
    font-weight: 600;
`

const ThirdPage = () => (
    <Wrapper>
        <img src={ graphqlLogo } />
        <Title>A query language for your APIs</Title>
            <P><PinkText>GraphQL</PinkText> is a query language for APIs and a runtime for fulfilling those queries with your existing data.</P>
            <P><PinkText>GraphQL</PinkText> provides a complete and understandable description of the data in your API.</P>
            <P>It gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</P>
        <img src={ graphqlExample } />
        <ListTitle>Why is <PinkText>GraphQL</PinkText> so kewl?</ListTitle>
        <List>
            <ListItem><BoldText>Eliminate frontend data boilerplate</BoldText> — no need to worry about requesting & waiting for data. Just ask for the data you need with a <PinkText>GraphQL</PinkText> query and it’ll show up when you need it</ListItem>
            <ListItem><BoldText>Push frontend complexity into queries</BoldText> — many data transformations can be done at build-time within your <PinkText>GraphQL</PinkText> queries</ListItem>
            <ListItem><BoldText>Improve performance by removing data bloat</BoldText> — <PinkText>GraphQL</PinkText> is a big part of why <PurpleText>Gatsby</PurpleText> is so fast as it enables lazy-loading the exact data in the exact form each view needs</ListItem>
            <ListItem>It’s the perfect data querying language for the often complex/nested data dependencies of modern applications</ListItem>
        </List>
    </Wrapper>
)

export default ThirdPage
