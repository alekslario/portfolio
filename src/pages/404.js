import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Typewriter from "../components/Typewriter"
import Footer from "../components/Footer"
const NotFoundPage = () => (
  <Layout>
    <Head title="Not found" />
    <div className="not_found_wrapper">
      <div className="not_found">
        <Typewriter text="404 - You are lost :(" />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
