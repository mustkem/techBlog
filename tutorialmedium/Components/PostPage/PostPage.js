import React from "react";
import axios from "axios";
import Prism from "prismjs";
import { Helmet } from "react-helmet";
import ContentLoader, { Facebook } from "react-content-loader";

import { withRouter } from 'next/router'

import { API_URL } from "../../config";

import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from "react-share";

import SideBanner from "../Layout/SideBanner/SideBanner";
import AdvertBannerTop from "../sharedComponents/Advert/AdvertBannerTop";

import Layout from "../Layout/Layout";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 50);
  }

  render() {
    const { post } = this.props;

    let href = "";
    if(typeof window !== 'undefined'){
      href = window.location.href; 
    }

    return (
      <Layout>
        <div className="post-page">
          <AdvertBannerTop />
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="post-wrap">
                  {this.state.loading && (
                  <div style={{ marginTop: 20 }}>
                    <MyLoader />
                  </div>
                  )}

                  {post && (
                    <div className="post RichEditor-editor">
                     
                      <h1 className="title">
                        <strong>{post.title}</strong>
                      </h1>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: 20,
                        }}
                      >
                        <div className="share-icon-container">
                         
                          <FacebookShareButton
                            url={href}
                            quote={post.title}
                            hashtag="#camperstribe"
                          >
                            <FacebookIcon size={36} round={true} />
                          </FacebookShareButton>
                          <TwitterShareButton
                            url={href}
                            title={post.title}
                            hashtag="#camperstribe"
                          >
                            <TwitterIcon size={36} round={true} />
                          </TwitterShareButton>
                          <WhatsappShareButton
                            url={href}
                            title={post.title}
                            separator=":: "
                          >
                            <WhatsappIcon size={36} round={true} />
                          </WhatsappShareButton>
                        </div>
                      </div>
                      {/* <div className="detail-image">
                        <img src={API_URL + "/" + post.imageUrl} />
                      </div> */}
                      <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="side-banner col-md-3">
                <SideBanner />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(PostPage);

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="13" />
    <rect x="0" y="30" rx="5" ry="5" width="100%" height="200" />

    {/* <rect x="0" y="25" rx="3" ry="3" width="220" height="15" />
    <rect x="170" y="60" rx="3" ry="3" width="50" height="8" /> */}
  </ContentLoader>
);
