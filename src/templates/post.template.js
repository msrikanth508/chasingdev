import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <SEO data={post} />
        <section
          style={{
            padding: "16px",
            border: "1px solid #cdcdcd",
            boxShadow: "0px 1px 1px #cdcdcd",
          }}
        >
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.date}</p>
          <p dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 280)
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
