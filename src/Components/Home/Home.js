import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Author from './Author'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from 'ramda';

import SideBanner from '../Layout/SideBanner/SideBanner';
import { lineHeight } from '@material-ui/system';

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
            <div className="home">
                <Container>
                    <AdvertBannerTop />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} >

                            <ul className="posts post-list">
                                {
                                    this.props.posts && this.props.posts.map((item, index) => {
                                        return (
                                            <li className="post-wrap" key={index}>
                                                <Link className="link title" to={'/' + item.slug}>
                                                    <div className="post-image">
                                                        <img src="images/JavaScriptListImage.png" />
                                                    </div>
                                                    <div className="post-preview" >
                                                        <h2>{item.title}</h2>
                                                        <div className="desc">
                                                            {
                                                                item.desc
                                                            }
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </Grid>
                        <Grid className="side-banner" item xs={0} sm={4}>
                            <SideBanner />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: path(["page", "posts"], state)
    }
}
export default connect(mapStateToProps)(Home);