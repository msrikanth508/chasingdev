// import React from 'react'
import Blog  from '../components/Blog'
import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'


export default (props) => {
    const posts = get(props, 'data.allMarkdownRemark.edges')
    return (
      <Blog posts={posts} location={props.location} />
    )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`