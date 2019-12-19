import React, { useState, useEffect } from "react"
import $ from "./Typewriter.module.scss"
const Typewriter = ({ text }) => {
  const [name, setName] = useState("")

  useEffect(() => {
    let timer = undefined
    let delay = 0
    text.split("").forEach((letter, index) => {
      delay += Math.random() * 180
      timer = setTimeout(() => {
        setName(prevState => prevState + letter)
      }, 700 + delay)
    })
    return () => clearTimeout(timer)
  }, [text])
  return (
    <div className={$.title}>
      {name}
      <span>&nbsp;</span>
    </div>
  )
}
export default Typewriter
