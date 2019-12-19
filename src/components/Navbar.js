import React from "react"
import smoothScroll from "../util/smoothScroll"
import $ from "./Navbar.module.scss"
const Navbar = () => {
  const handleClick = e => {
    e.preventDefault()
    const id = e.target.name
    smoothScroll(id)
  }
  return (
    <div className={$.container}>
      <nav className={$.navbar}>
        <button name="projects" onClick={handleClick}>
          Projects
        </button>
        <button name="contact" onClick={handleClick}>
          Contact
        </button>
      </nav>
    </div>
  )
}
export default Navbar
