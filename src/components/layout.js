
import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import NavWrapper from '../components/globals/navbar'

// import './bootstrap.min.css';
import "./layout.css";
// import '../sass/layout.scss';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavWrapper/>
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding: 0px;
  box-sizing: border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
