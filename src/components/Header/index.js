import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import octocatLogo from '../../img/octocat.png'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 820px) {
    flex-direction: column;
    text-align: center;
  }
`
const Logo = styled.a`
  list-style: none;
  margin: 0 0 0 1em;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: .30em;
  margin: 0;
  color: rebeccapurple;
`
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 820px) {
    flex-direction: column;
    text-align: center;
  }
`
const NavMenuLinks = styled.a`
  margin: 0;
  text-decoration: none;
  letter-spacing: .30em;
  color: rebeccapurple;
  display: block;
  font-size: 13px;
  padding: 1em;
`
const OctocatLogo = styled.img`
  width: 64px;
  height: 56px;
`
const path = `/dorians-super-cool-gatsby-site/`

const Header = () => (
  <Nav>
    <Logo a href={ `${ path }` }>Gatsby Learning Session</Logo>
      <NavMenu>
        <NavMenuLinks a href={ `${ path }page-2` }>Gatsby Features</NavMenuLinks>
        <NavMenuLinks a href={ `${ path }page-3` }>GraphQL</NavMenuLinks>
        <NavMenuLinks a href={ `${ path }page-4` } >Gatsby w/ GraphQL</NavMenuLinks>
        <NavMenuLinks a href={ `${ path }hn-feed` }>HN</NavMenuLinks>
        <NavMenuLinks a href={ `${ path }medium-feed` }>DailyJS</NavMenuLinks>
        <a href={ `https://github.com/DorianDevelops/dorians-super-cool-gatsby-site` } target="_blank" ><OctocatLogo src={ octocatLogo } /></a>
      </NavMenu>
  </Nav>
)

export default Header
