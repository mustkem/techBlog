import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withRouter } from "react-router"
import { path } from 'ramda'

import SideBanner from '../Layout/SideBanner/SideBanner'
import Author from '../Home/Author';
import MyEditor from '../AddPost/MyEditor';
import AdvertBannerTop from '../sharedComponents/Advert/AdvertBannerTop';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editPost: false
        }
    }
    componentDidMount() {
        this.props.getPost(this.props.match.params);
        let setTimeIntervalId = setInterval(() => {
            if (window.post) {
                clearInterval(setTimeIntervalId);
                this.setState({
                    post: window.post
                })
            }
        }, 1000);
        window.scroll(0, 0)
        
    }

    onEditClick = () => {
        this.setState({
            editPost: !this.state.editPost
        })
    }

    render() {
        const postItem = path([0,], window.post);
        if (!postItem) {
            return null;
        }
        return (
            <div className="post-page">
                <Container>
                    <AdvertBannerTop />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <div className="bttn-wrap">
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
                            </div>

                            {
                                !this.state.editPost &&
                                <div className="post-wrap">
                                    <div className="post RichEditor-editor" >
                                        <h1 className="title">
                                            <strong>{postItem.title}</strong>
                                        </h1>
                                        <div className="post-content" dangerouslySetInnerHTML={{ __html: postItem.content }}>
                                        </div>
                                    </div>
                                    <Author />
                                </div>
                            }
                            {
                                this.state.editPost &&
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
                            }
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

export default withRouter(PostPage);