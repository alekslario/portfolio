import React from "react"
import $ from "./About.module.scss"
const About = ({ statements }) => {
  return (
    <div className={$.container}>
      <div className={$.terminal}>
        <div className={$.terminal_header}>
          <div className={`${$.header_button} ${$.red}`} />
          <div className={`${$.header_button} ${$.yellow}`} />
          <div className={`${$.header_button} ${$.green}`} />
        </div>
        <div className={$.terminal_window}>
          {statements.map((statement, index) => (
            <div className={$.statement} key={index}>
              <div className={$.input_statement}>{statement.input}</div>
              <div
                className={$.return_statement}
                dangerouslySetInnerHTML={{
                  __html: statement.return,
                }}
              />
            </div>
          ))}
          <div className={$.statement}>
            <div className={$.input_statement}>
              <span>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
