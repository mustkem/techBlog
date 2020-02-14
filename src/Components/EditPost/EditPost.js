import React from 'react';
import Container from '@material-ui/core/Container';
import MyEditor from './MyEditor';
import EditorConvertToHTML from './EditorConvertToHTML'

class EditPost extends React.Component{
    
    render(){
        return (
            <div className="home">
               <Container maxWidth="lg">
                </Container>
            </div>
        )
    }
}
export default EditPost;

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withRouter } from "react-router"
import {path} from 'ramda'

import SideBanner from '../Layout/SideBanner/SideBanner'
import Author from '../Home/Author'

class PostPage extends React.Component {
    componentDidMount(){
        this.props.getPost(this.props.match.params);
        let setTimeIntervalId = setInterval(() => {
            if(window.post){
                console.log(window.post);
                clearInterval(setTimeIntervalId);
                this.setState({
                    post:window.post
                })
            }
        }, 1000);
    }
    render(){
        const postItem = path([0,],window.post);
        if(!postItem){
            return null;
        }
        return(
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                    {/* <h2>Articles</h2> */}
                    <div className="post-wrap">
                        <div className="post RichEditor-editor" >
                            <h3 className="title">
                                <strong>{postItem.title}</strong>
                            </h3>
                                <div dangerouslySetInnerHTML={{__html: postItem.content}}>
                            </div>
                        </div>
                        <Author />
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                        <SideBanner />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withRouter(PostPage);
