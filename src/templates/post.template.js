import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Share from "../components/Share/Share"
import "./styles.css"

const BlogPostTemplate = props => {
  const {
    location,
    data: {
      site: { siteMetadata },
      markdownRemark: { html, frontmatter, description },
    },
  } = props
  const { siteUrl, twitterUserName, author } = siteMetadata
  const url = `${siteUrl}${location.pathname}`
  const imageURL = `${siteUrl}${frontmatter.cover.childImageSharp.resize.src}`
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
      <section className="article">
        <Img fluid={frontmatter.cover.childImageSharp.fluid} />
        <section className="article__body">
          <h1>{postTitle}</h1>
          <h6>{date}</h6>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
        <section className="article__footer">
          <Share title={postTitle} tags={keywords} url={url} />
        </section>
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
