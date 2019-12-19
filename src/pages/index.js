import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Navbar from "../components/Navbar"
import Links from "../components/Links"
import smoothscroll from "smoothscroll-polyfill"
import statements from "../content/summary"
smoothscroll.polyfill()

const IndexPage = ({ data }) => (
  <Layout>
    <Head title="Home" />
    <Navbar />
    <Hero />
    <About statements={statements} />
    <h2 id="projects" className="section-title">
      Projects
    </h2>
    <Projects projects={data.allProjectsJson.edges} />
    <h2 id="contact" className="section-title">
      Contact me!
    </h2>
    <Links />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          skills
          links {
            github
            preview
          }
          image {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
