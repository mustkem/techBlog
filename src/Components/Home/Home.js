import React from "react";

import { connect } from "react-redux";
import { path } from "ramda";
import { parse } from "query-string";
import ContentLoader, { Facebook } from "react-content-loader";
import { Helmet } from "react-helmet";

import SideBanner from "../Layout/SideBanner/SideBanner";

import PostItem from "./components/PostItem";

import Layout from "../Layout/Layout";

import AdvertBannerTop from "../sharedComponents/Advert/AdvertBannerTop";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const query = parse(this.props.location.search);
    this.props.getPosts(query);
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <meta
            name="Description"
            content={
              "Learn Javascript, React, Best Practice Javascript, Best Practice React"
            }
          />
        </Helmet>
        <div className="home">
          <AdvertBannerTop />
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ul className="posts post-list">
                  {this.props.loading &&
                    [1, 1].map((item) => {
                      return (
                        <li className="post-card">
                          <div style={{ padding: 15 }}>
                            <MyLoader />
                          </div>
                        </li>
                      );
                    })}
                  {!this.props.loading &&
                    this.props.posts &&
                    this.props.posts.map((item, index) => {
                      return <PostItem item={item} key={index} />;
                    })}
                </ul>
              </div>
              <div className="side-banner " xs={0} sm={4}>
                <SideBanner />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: path(["page", "posts"], state),
    loading: path(["page", "loading"], state),
  };
};
export default connect(mapStateToProps)(Home);

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="228" y="0" rx="5" ry="5" width="280" height="150" />
    <rect x="0" y="5" rx="4" ry="4" width="220" height="13" />
    <rect x="0" y="25" rx="3" ry="3" width="220" height="15" />
    <rect x="170" y="60" rx="3" ry="3" width="50" height="8" />
  </ContentLoader>
);
