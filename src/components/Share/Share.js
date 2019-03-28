import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"
import "./styles.css"

const Share = ({ title, tags, url }) => (
  <section class="share-post">
    <section className="share-post__body">
      <h6 className="share-post__body--title">Share</h6>
      <FacebookShareButton
        url={url}
        quote={title}
        className="share-post__body--button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via="_srikanthm_"
        hashtags={tags}
        className="share-post__body--button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="share-post__body--button"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={title}
        className="share-post__body--button"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=":: "
        className="share-post__body--button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </section>
  </section>
)

export default Share
