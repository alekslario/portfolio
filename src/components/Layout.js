import React from "react"
import "../styles/index.scss"
import $ from "./Layout.module.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "../fontawesome"
// Prevent fontawesome from dynamically adding its css
config.autoAddCss = false
const Layout = ({ children }) => <div className={$.container}>{children}</div>

export default Layout
