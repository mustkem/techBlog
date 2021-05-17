import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { path } from 'ramda';

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
        this.props.getPosts();
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
                                           <PostItem item={item} key={index} index={index} />
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
export default connect(mapStateToProps)(Home);