import React from "react";
import { withRouter } from "react-router";

import MyEditor from "./MyEditor";
import { Button, Modal } from "react-bootstrap";

import Layout from "../Layout/Layout";

import axios from "axios";

import { API_URL } from "../../../config";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editPost: false,
      post: null,
      authorCode: null,
      showDeleteModel: false,
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: API_URL + "/admin/feed/post/" + this.props.match.params.postId,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
    })
      .then((response) => {
        this.setState({
          post: response.data.post,
        });
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  updatePost = (payload) => {
    axios({
      method: "put",
      url: API_URL + "/admin/feed/post/" + this.props.match.params.postId,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
      data: payload,
    })
      .then((response) => {
        this.setState({
          post: response.data.post,
        });
        alert("Updated");
        this.props.history.push("/admin/posts/home");
        return response.data;
      })
      .catch(function (error) {
        alert("Error");

        return error;
      });
  };

  deletePost = () => {
    axios({
      method: "delete",
      url: API_URL + "/admin/feed/post/" + this.props.match.params.postId,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
      data: {
        authorCode: this.state.authorCode,
      },
    })
      .then((response) => {
        this.setState({
          showDeleteModel: !this.state.showDeleteModel,
        });
        alert("Deleted");
        this.props.history.push("/admin/posts/home");
        return response.data;
      })
      .catch(function (error) {
        alert("Error");

        return error;
      });
  };

  onEditClick = () => {
    this.setState({
      editPost: !this.state.editPost,
    });
  };

  render() {
    const postItem = this.state.post;
    if (!postItem) {
      return null;
    }
    return (
      <Layout>
        <div className="post-page">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="bttn-wrap">
                  <Button onClick={this.onEditClick}>
                    {!this.state.editPost && "Edit Post"}
                    {this.state.editPost && "View Post"}
                  </Button>
                  <Button
                    style={{ marginLeft: 10 }}
                    variant="danger"
                    onClick={() => {
                      this.setState({
                        showDeleteModel: !this.state.showDeleteModel,
                      });
                    }}
                  >
                    Delete Post
                  </Button>
                </div>

                {!this.state.editPost && (
                  <div className="post-wrap">
                    <div className="post RichEditor-editor">
                      <h1 className="title">
                        <strong>{postItem.title}</strong>
                      </h1>
                      <div
                        className="detail-image"
                      
                      >
                      <img
                        src={API_URL + "/" + postItem.imageUrl}
                      />
                      </div>
                     
                      <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: postItem.content }}
                      ></div>
                    </div>
                  </div>
                )}
                {this.state.editPost && (
                  <div>
                    <MyEditor
                      content={postItem.content}
                      title={postItem.title}
                      desc={postItem.desc}
                      updatePost={this.updatePost}
                      query={this.props.match.params}
                      slug={postItem.slug}
                      id={postItem.id}
                      editPost={true}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={this.state.showDeleteModel}
          onHide={() => {
            this.setState({
              handleClose: !this.state.handleClose,
            });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Do you want to delete this post?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{postItem.title}</p>
            <div class="grp">
              <p>Auth code</p>
              <input
                type="text"
                value={this.state.authorCode}
                onChange={(e) => {
                  this.setState({ authorCode: e.target.value });
                }}
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.deletePost}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    );
  }
}

export default withRouter(PostDetail);
