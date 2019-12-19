import React from "react"
import $ from "./Links.module.scss"
const Links = () => (
  <div className={$.links}>
    <span>
      <a rel="noopener" target="_blank" href="mailto:aleksandlario@gmail.com">
        aleksandlario@gmail.com
      </a>
    </span>
    <span>
      <a
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/aleksandrs-larionovs/"
      >
        LinkedIn
      </a>
    </span>
    <span>
      <a rel="noopener" target="_blank" href="https://github.com/alekslario">
        github
      </a>
    </span>
  </div>
)

export default Links
