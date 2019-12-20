import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Typewriter from "../components/Typewriter"
const NotFoundPage = () => (
  <Layout>
    <Head title="Not found" />
    <Typewriter text="404 - You are lost :(" />
  </Layout>
)

export default NotFoundPage
