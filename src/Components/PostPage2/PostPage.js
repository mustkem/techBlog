import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import { path } from "ramda";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBeer, FaFacebook } from "react-icons/fa";

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
import MyEditor from "../AddPost/MyEditor";
import AdvertBannerTop from "../sharedComponents/Advert/AdvertBannerTop";

import Layout from "../Layout/Layout";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editPost: false,
    };
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params);
    let setTimeIntervalId = setInterval(() => {
      if (window.post) {
        clearInterval(setTimeIntervalId);
        this.setState({
          post: window.post,
        });
      }
    }, 1000);
    window.scroll(0, 0);
  }

  onEditClick = () => {
    this.setState({
      editPost: !this.state.editPost,
    });
  };

  render() {
    const postItem = path([0], window.post);
    if (!postItem) {
      return null;
    }
    return (
      <Layout>
        <div className="post-page">
        <AdvertBannerTop />
          <div className="container">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                {/* <div className="bttn-wrap">
                                <button onClick={this.onEditClick}>
                                    {
                                        !this.state.editPost &&
                                        'Edit Post'
                                    }
                                    {
                                        this.state.editPost &&
                                        'View Post'
                                    }
                                </button>
                            </div> */}

                {!this.state.editPost && (
                  <div className="post-wrap">
                    <div className="post RichEditor-editor">
                      <h1 className="title">
                        <strong>{postItem.title}</strong>
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
                      <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: postItem.content }}
                      ></div>
                    </div>
                    {/* <Author /> */}
                  </div>
                )}
                {this.state.editPost && (
                  <div>
                    <MyEditor
                      content={postItem.content}
                      title={postItem.title}
                      desc={postItem.desc}
                      updatePost={this.props.updatePost}
                      query={this.props.match.params}
                      slug={postItem.slug}
                      id={postItem.id}
                      editPost={true}
                    />
                  </div>
                )}
              </Grid>
              <Grid className="side-banner" item xs={0} sm={4}>
                <SideBanner />
              </Grid>
            </Grid>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(PostPage);
