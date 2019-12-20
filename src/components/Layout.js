import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.scss"
import layoutStyles from "./Layout.module.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false
import "../fontawesome"

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
