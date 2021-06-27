import React from "react";

import { connect } from "react-redux";
import ContentLoader, { Facebook } from "react-content-loader";

import SideBanner from "../Layout/SideBanner/SideBanner";

import PostItem from "./components/PostItem";

import Layout from "../Layout/Layout";

import AdvertBannerTop from "../sharedComponents/Advert/AdvertBannerTop";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <Layout>
        <div className="home">
          <div className="container">
            
                <ul className="posts post-list">
                  {
                    this.props.posts &&
                    this.props.posts.map((item, index) => {
                      return <PostItem item={item} key={item._id} />;
                    })}
                </ul>
              
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.page.posts,
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
