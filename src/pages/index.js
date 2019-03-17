import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/Profile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`application`, `react`, "blog"]} />
    <Profile />
  </Layout>
)

export default IndexPage
