import React from 'react';

import { connect } from 'react-redux';
import { path } from 'ramda';
import axios from 'axios';

import { API_URL } from "../../../config";


import PostItem from './components/PostItem';
import { getAdminPosts } from '../../../Store/Actions/actions';


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
            url: API_URL + "/admin/feed/post",
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
                    posts:response.data
                })
                return response.data;
            })
            .catch(function (error) {
              return error;
            });
    }


    render() {

        console.log("testrr")
        return (
            <div className="home">
                <div className="container">
                    <h3>Posts</h3>
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
                        </div>
                    </div>
                </div>
            </div>
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