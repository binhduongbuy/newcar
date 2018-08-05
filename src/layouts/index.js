import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
//require('font-awesome/css/font-awesome.min.css'); 
import ScrollUpButton from "react-scroll-up-button"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import './index.scss'
import '../assets/scss/main.scss'

const Layout = ({ children }) => (
  <div>
    <Header />
    <ScrollUpButton />
    <main style={{marginTop: '65px'}}>
    {children()}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

