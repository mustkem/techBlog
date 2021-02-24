import React from 'react';

import { connect } from 'react-redux';
import { path } from 'ramda';
import axios from 'axios';

import { API_URL } from "../../../config";


import PostItem from './components/PostItem';
import { getAdminPosts } from '../../../Store/Actions/actions';

import Layout from '../Layout/Layout'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount() {
        axios({
            method: "get",
            url: API_URL + "/admin/feed/posts",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin"),
            },
            params:{
                user:"6035c940ab2e02358fac6e6b"
            }
          })
            .then( (response)=> {
                this.setState({
                    posts:response.data.posts
                })
                return response.data;
            })
            .catch(function (error) {
              return error;
            });
    }


    render() {

        console.log("sd", this.state.posts);

        return (
            <Layout >
            <div className="home">
                <div className="container">
                    <h3 style={{marginBottom:30}}>Posts</h3>
                    <div className="row" >
                        <div className="col-9" >

                            <ul className="posts post-list">
                                {
                                    this.state.posts && this.state.posts.map((item, index) => {
                                        return (
                                           <PostItem item={item} key={index} />
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="side-banner" xs={0} sm={4}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminPosts: (payload)=> dispatch(getAdminPosts(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);