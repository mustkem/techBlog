import React from 'react';

import { connect } from 'react-redux';
import { path } from 'ramda';
import { parse } from 'query-string'
import { withRouter } from 'react-router-dom'


import SideBanner from '../Layout/SideBanner/SideBanner';

import PostItem from './components/PostItem'

import Layout from '../Layout/Layout'

import AdvertBannerTop from '../sharedComponents/Advert/AdvertBannerTop'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        const query = parse(this.props.location.search);
        this.props.getPosts(query);
    }
    render() {
        return (
            <Layout >
            <div className="home">
            <AdvertBannerTop />
                <div className="container">
                    
                    <div className="row" >
                        <div className="col" >

                            <ul className="posts post-list">
                                {
                                    this.props.posts && this.props.posts.map((item, index) => {
                                        return (
                                           <PostItem item={item} key={index} />
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="side-banner" xs={0} sm={4}>
                            <SideBanner />
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: path(["page", "posts"], state)
    }
}
export default withRouter(connect(mapStateToProps)(Home));