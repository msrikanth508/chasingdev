import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({
  title,
  description,
  keywords,
  url,
  imageURL,
  siteTitle,
  lang,
  author,
  twitterUserName
}) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={title}
    meta={[
      {
        name: 'title',
        content: title
      },
      {
        name: 'description',
        content: description
      }
    ]
      .concat(
        keywords.length > 0
          ? {
            name: `keywords`,
            content: keywords.join(`, `)
          }
          : []
      )
      .concat([
        /** Facebook meta tags */
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:image',
          content: imageURL
        },
        {
          property: 'og:image:secure_url',
          content: imageURL
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        },
        {
          property: 'og:locale',
          content: lang
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: siteTitle
        },
        /** Twitter meta tags */
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: twitterUserName
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:image',
          content: imageURL
        }
      ])}
  />
)

SEO.defaultProps = {
  lang: 'en',
  keywords: []
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  url: PropTypes.string,
  imageURL: PropTypes.string,
  siteName: PropTypes.string,
  lang: PropTypes.string,
  author: PropTypes.string,
}

export default SEO
