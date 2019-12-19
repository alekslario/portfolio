import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.scss"
import "../fontawesome"
import layoutStyles from "./Layout.module.scss"

const Layout = ({ children }) => (
  <>
    <div className="container-lg">{children}</div>
    <footer className="footer">
      Made by Aleksandrs Larionovs © {new Date().getFullYear()}
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
