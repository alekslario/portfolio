import About from "../components/About"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Links from "../components/Links"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import React from "react"
import { graphql } from "gatsby"
import statements from "../content/summary"

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
    <Footer />
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
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
