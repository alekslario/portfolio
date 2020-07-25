import React from "react"
import Typewriter from "./Typewriter"
import scrollTo from "../util/smoothScroll"
import $ from "./Hero.module.scss"
const Hero = () => (
  <div className={$.container}>
    <Typewriter text="Alex Larionovs" />
    <div className={$.description}>
      I am a web developer based in London. My passion is building fast,
      responsive web apps.
      <br />
      Check out my{" "}
      <button onClick={() => scrollTo("projects")}>projects</button> below.
    </div>
  </div>
)

export default Hero
