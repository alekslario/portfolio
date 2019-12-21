import React from "react"
import $ from "./Footer.module.scss"
export const Footer = () => (
  <footer className={$.footer}>
    Made by Aleksandrs Larionovs © {new Date().getFullYear()}
  </footer>
)
export default Footer
