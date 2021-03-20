import React from "react";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { path } from "ramda";
import axios from "axios";
import Prism from "prismjs"


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
import Author from "../Home/Author";
import MyEditor from "../admin/AddPost/MyEditor";
import AdvertBannerTop from "../sharedComponents/Advert/AdvertBannerTop";

import Layout from "../Layout/Layout";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  
  componentDidMount() {
    axios({
      method: "get",
      url: API_URL + "/feed/post/"+ this.props.match.params.slug,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
    })
      .then((response) => {
        this.setState({
          post: response.data.post,
        },()=>{
          setTimeout(() => Prism.highlightAll(), 0)
        });
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  

  render() {
    const { post } = this.state;

    return (
      <Layout>
        <div className="post-page">
          <AdvertBannerTop />
          <div className="container">
            {this.state.post && (
              <div className="row">
                <div className="col-md-9">
                  <div className="post-wrap">
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
                          <WhatsappShareButton>
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>

                          <TwitterShareButton>
                            <TwitterIcon size={32} round={true} />
                          </TwitterShareButton>

                          <FacebookShareButton url="test">
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>

                          <RedditShareButton>
                            <RedditIcon size={32} round={true} />
                          </RedditShareButton>

                          <TelegramShareButton>
                            <TelegramIcon size={32} round={true} />
                          </TelegramShareButton>

                          <WorkplaceShareButton>
                            <WorkplaceIcon size={32} round={true} />
                          </WorkplaceShareButton>
                        </div>
                       
                      </div>
                      <div className="detail-image">
                        <img src={API_URL + "/" + post.imageUrl} />
                      </div>
                      <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="side-banner col-md-3" >
                  <SideBanner />
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(PostPage);
