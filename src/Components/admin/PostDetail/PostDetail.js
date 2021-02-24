import React from 'react';
import { withRouter } from "react-router"
import { path } from 'ramda'

import MyEditor from '../AddPost/MyEditor';

import Layout from '../Layout/Layout';

import axios from 'axios';

import { API_URL } from "../../../config";

class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editPost: false,
            post:null,
        }
    }
    componentDidMount() {
        axios({
            method: "get",
            url: API_URL + "/admin/feed/post/"+this.props.match.params.slug,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin"),
            },
           
          })
            .then( (response)=> {
                this.setState({
                    post:response.data.post
                })
                return response.data;
            })
            .catch(function (error) {
              return error;
            });
        
    }

    onEditClick = () => {
        this.setState({
            editPost: !this.state.editPost
        })
    }

    render() {

console.log("test")

        const postItem = this.state.post;
        if (!postItem) {
            return null;
        }
        return (
            <Layout >
            <div className="post-page">
                <div className="container">
                    <div className="row" >
                        <div className="col-9">
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
                        </div>
                       
                    </div>
                </div>
            </div>
            </Layout >
        )
    }
}

export default withRouter(PostDetail);