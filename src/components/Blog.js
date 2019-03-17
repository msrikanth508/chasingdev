import React from "react"
import Layout from "../layout"
import get from "lodash/get"
import Link from "gatsby-link"

export default ({ location, posts }) => (
  <Layout location={location}>
    <section
      className="post"
      style={{
        padding: "16px",
        border: "1px solid #cdcdcd",
        boxShadow: "0px 1px 1px #cdcdcd",
      }}
    >
      {posts.map(({ node }) => {
        const title = get(node, "frontmatter.title") || node.fields.slug
        return (
          <React.Fragment>
            <h3>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <p className="font-normal text-xs">
              <span>{node.frontmatter.date}</span>
            </p>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </React.Fragment>
        )
      })}
    </section>
  </Layout>
)
