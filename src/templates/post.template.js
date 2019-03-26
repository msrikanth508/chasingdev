import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import  Img from 'gatsby-image'

const BlogPostTemplate = props => {
  const {
    location,
    data: {
      site: { siteMetadata },
      markdownRemark: { html, frontmatter, description },
    },
  } = props
  const { siteUrl, twitterUserName, author } = siteMetadata
  const url = `${siteUrl || location.origin}${location.pathname}`
  const imageURL = `${siteUrl || location.origin}${frontmatter.cover.childImageSharp.resize.src}`
  const { title: postTitle, date, keywords } = frontmatter

  return (
    <Layout>
      <SEO
        title={postTitle}
        description={description}
        keywords={keywords}
        url={url}
        imageURL={imageURL}
        siteName={siteUrl}
        author={author}
        twitterUserName={twitterUserName}
      />
      <section
        style={{
          padding: "16px",
        }}
      >
        <article
          style={{
            paddingBottom: "8px",
          }}
        >
          <Img fluid={frontmatter.cover.childImageSharp.fluid} />
        </article>

        <h1>{postTitle}</h1>
        <h6>{date}</h6>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        twitterUserName
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      description: excerpt(pruneLength: 200)
      frontmatter {
        title
        keywords
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            resize(width: 1200, height: 1200) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
