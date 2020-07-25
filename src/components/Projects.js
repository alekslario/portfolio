import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import $ from "./Projects.module.scss"
const Projects = ({ projects }) => (
  <div className={$.projects_container}>
    {projects.map(
      ({
        node: {
          title,
          description,
          skills,
          links: { preview, github },
          image,
        },
      }) => (
        <div key={title} className={$.project_card}>
          <Img
            fluid={image.childImageSharp.fluid}
            className={$.project_image_wrapper}
          />

          <div className={$.project_content}>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            {
              <div className={$.project_skills}>
                {skills.map((skill, index) => {
                  return (
                    <span key={index} className={$.project_skill}>
                      {skill}
                    </span>
                  )
                })}
              </div>
            }
            <div className={$.project_links}>
              <a
                href={preview}
                rel="noopener noreferrer"
                target="_blank"
                className={$.project_link}
              >
                Live Demo <FontAwesomeIcon icon="external-link-alt" />
              </a>
              <a
                href={github}
                rel="noopener noreferrer"
                target="_blank"
                className={`${$.project_link} ${$.secondary}`}
              >
                <FontAwesomeIcon icon={["fab", "github"]} /> View Source
              </a>
            </div>
          </div>
        </div>
      )
    )}
  </div>
)

export default Projects
