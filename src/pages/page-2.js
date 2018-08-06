import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import greatGatsbyImg from '../img/great-gatsby.jpg'

const Wrapper = styled.div`
  margin: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Title = styled.h1`
  flex-basis: 100%;
  text-align: center;
  font-size: 38px;
  margin: 64px 0;
  color: rebeccapurple;
`
const GreatGatsbyImg = styled.img`
  width: 100%;
`
const ListTitle = styled.h2`
  margin: 28px 0 28px 24px;
  font-size: 34px;
  color: rebeccapurple; 
`
const List = styled.ul`
  padding: 20px;
  list-style-type: none;
`
const ListItem = styled.li`
  font-size: 20px;
`
const ListItemTitle = styled.span`
  font-weight: 600;
  color: rebeccapurple;
`

const SecondPage = () => (
  <Wrapper>
    <Title>Great Gatsby...</Title><GreatGatsbyImg src={ greatGatsbyImg } /><Title>...out of the box features</Title>
      <ListTitle>Performance</ListTitle>
        <List>
          <ListItem><ListItemTitle>Prefetch linked pages</ListItemTitle> - Gatsby supports content pre-fetching, out of the box. So content needed to load the next link you click will be loaded in the background while you browse the page.</ListItem>
          <ListItem><ListItemTitle>Page caching</ListItemTitle> - Fingerprinting static resources that aren't expected to change lets browsers serve content locally when a user visits a page they've already been to, as opposed to making an extra network call.</ListItem>
          <ListItem><ListItemTitle>No extraneous code fetching</ListItemTitle> - Extraneous code fetches is typically done by single-page applications written in various JS frameworks; on page load they fetch the code needed to run the entire application rather than just the page that's loaded. Website-building frameworks tend to be fine on this.</ListItem>
          <ListItem><ListItemTitle>Progressive image loading</ListItemTitle> - Progressive image loading means displaying a blurry placeholder image before loading the full heavyweight asset. This prevents the display from "bouncing around" as images load in addition to making the page feel complete before they have.</ListItem>
          <ListItem><ListItemTitle>Responsive image loading</ListItemTitle> - Responsive images enable modern browsers to load the right size of image assets given browser size -- that way users with high-resolution, large-screen devices can get a high-quality image while users on low-resolution or small-screen devices don't spend extra time waiting for the page to load when a low-resolution asset would suffice.</ListItem>
        </List>
      <ListTitle>Developer Experience</ListTitle>
        <List>
          <ListItem><ListItemTitle>Severless</ListItemTitle> - Serverless means not having to worry about security and framework upgrades. It means reduced ops -- you don't have to ssh into a live production server and see what's going on.</ListItem>
          <ListItem><ListItemTitle>Componentization</ListItemTitle>  - Component systems allow developers to plug-n-play either external 3rd party components or internal components from a shared codebase or component library. Gatsby supports this through ReactJS.</ListItem>
          <ListItem><ListItemTitle>One-way data binding</ListItemTitle> - Gatsby is built on top of React, which uses a one-directional data binding system for its components. One-directional data flows are essential to building complex frontend components by removing complex cross-dependencies present in alternate data flow approaches, such as MVC.</ListItem>
          <ListItem><ListItemTitle>Declarative API data queries (GraphQL)</ListItemTitle> - Gatsby is built on top of GraphQL, which allows you to write declarative queries for the data you want, and co-locate your components.</ListItem>
          <ListItem><ListItemTitle>Declarative UI</ListItemTitle> - Gatsby is built on top of React, which allows a hierarchical UI construction by declaratively passing props down child trees.</ListItem>
        </List>
        <ListTitle>Ecosystem, Design and More</ListTitle>
        <List>
          <ListItem><ListItemTitle>Component ecosystem</ListItemTitle> - React has several sets of out-of-the-box component libraries, plugins and themes.</ListItem>
          <ListItem><ListItemTitle>Programmatic Design</ListItemTitle>  - Gatsby offers support for programmatic design by being built on Typography.js.</ListItem>
          <ListItem><ListItemTitle>Design systems</ListItemTitle> - Gatsby offers native support for design systems through react-sketch, a tool allowing you to export your production React components into Sketch. Other frameworks aren't plugged into the React ecosystem.</ListItem>
          <ListItem><ListItemTitle>Hosted option</ListItemTitle> - Gatsby and other static site generators can be plugged into static hosts such as Netlify, surge.sh or GitHub pages.</ListItem>
        </List>
  </Wrapper>
)

export default SecondPage
