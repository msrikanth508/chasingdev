import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "male.png" }) {
          childImageSharp {
            fixed(width: 180, height: 180) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default () => (
  <section
    style={{
      display: "flex",
      padding: "8px",
    }}
  >
    <section>
      <Image />
    </section>
    <section
      style={{
        padding: "16px",
      }}
    >
      <h3>Srikanth Mangipudi</h3>
      <p>
        I'm a frontend developer specialised in development for complex scalable
        web apps. I'm currently living in Berlin, Germany, I write about web
        development on my blog. <Link to="/blog/">Check my blog posts</Link>
      </p>
    </section>
  </section>
)
