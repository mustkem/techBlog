import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

import axios from "axios";
import { API_URL } from "../../../config";

import Select from "react-select";

import Preview from "./Preview";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      title: this.props.title,
      desc: this.props.desc,
      authorCode: null,
      categories: [],
      selectedCategories: this.props.selectedCategories || [],
      isPreview: false,
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    axios({
      method: "get",
      url: API_URL + "/admin/common/categories",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
    })
      .then((response) => {
        this.setState({
          categories: response.data.categories.map((item) => ({
            ...item,
            value: item._id,
          })),
        });
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);

    this.setState({
      content,
    });
  };

  addPost = (e) => {
    console.log("content", this.state.content);

    e.preventDefault();
    let slug = this.state.title.replace(/\s/g, "-");
    if (this.props.slug) {
      slug = this.props.slug;
    }

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("image", this.state.image);
    formData.append("content", this.state.content);
    formData.append("desc", this.state.desc);
    formData.append("creator", this.props.user.userId);
    formData.append("slug", slug);
    formData.append("authorCode", this.state.authorCode);
    formData.append(
      "categories",
      JSON.stringify(this.state.selectedCategories.map((item) => item.value))
    );

    console.log(formData);

    axios({
      method: "post",
      url: API_URL + "/admin/feed/post",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
      data: formData,
    })
      .then((response) => {
        alert("Post added");
        this.props.history.push("/admin/posts/home");
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  handleUpdatePost = (e) => {
    console.log("content", this.state.content);

    e.preventDefault();
    let slug = this.state.title.replace(/\s/g, "-");
    if (this.props.slug) {
      slug = this.props.slug;
    }

    const formData = new FormData();
    formData.append("title", this.state.title);
    if (this.state.image) {
      formData.append("image", this.state.image);
    }
    formData.append("content", this.state.content);
    formData.append("desc", this.state.desc);
    formData.append("creator", this.props.user.userId);
    formData.append("slug", slug);
    formData.append("authorCode", this.state.authorCode);
    formData.append(
      "categories",
      JSON.stringify(this.state.selectedCategories.map((item) => item.value))
    );

    console.log(formData);

    axios({
      method: "put",
      url: API_URL + "/admin/feed/post/" + this.props.postId,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
      data: formData,
    })
      .then((response) => {
        alert("Post updated");
        this.props.history.push("/admin/posts/home");
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  onFileChange = (value, files) => {
    // if (files) {
    //   generateBase64FromImage(files[0])
    //     .then(b64 => {
    //       this.setState({ imagePreview: b64 });
    //     })
    //     .catch(e => {
    //       this.setState({ imagePreview: null });
    //     });
    // }
    this.setState({
      image: files ? files[0] : value,
    });
  };

  updateMainState = (stateChunk) => {
    this.setState({
      ...this.state,
      ...stateChunk,
    });
  };

  render() {
    return (
      <div style={{ padding: "25px" }}>
        <div className="action-wrap">
          <Button
            onClick={() => {
              this.setState({ isPreview: true });
            }}
          >
            Preview
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Write Post</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Title</p>
          <input
            style={{ width: "50%" }}
            value={this.state.title}
            onChange={(e) => {
              this.handleChange(e, "title");
            }}
            placeholder="title..."
          ></input>
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Add Main Image</p>
          <input
            className=""
            type="file"
            onChange={(e) => this.onFileChange(e.target.value, e.target.files)}
          />
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Description</p>
          <textarea
            style={{ width: "50%" }}
            value={this.state.desc}
            onChange={(e) => {
              this.handleChange(e, "desc");
            }}
          />
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Select category</p>
          <div style={{zIndex:10000, position:"relative"}}>
          <Select
            
            isMulti
            value={this.state.selectedCategories}
            onChange={(selected) => {
              this.setState({
                selectedCategories: selected,
              });
            }}
            options={this.state.categories}
          />
          </div>
          
        </div>

        <div style={{ height: 700 }}>
          <Editor
            value={this.state.content}
            init={{
              height: 700,
              menubar: true,
              // plugins: [
              //   'advlist',
              //   'searchreplace visualblocks code fullscreen',
              //   'insertdatetime media table paste code help wordcount'
              // ],
              plugins: [
                "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",

              body_class: "my_class",
            }}
            onEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="bttn-wrap">
          <form className="author-id-form" onSubmit={this.addPost}>
            <div class="grp">
              <label>Auth code</label>
              <input
                type="text"
                value={this.state.authorCode}
                onChange={(e) => {
                  this.setState({ authorCode: e.target.value });
                }}
              />
            </div>
            {!this.props.editPost && <Button type="submit">Publish</Button>}
            {this.props.editPost && (
              <Button onClick={this.handleUpdatePost} type="button">
                {" "}
                Update{" "}
              </Button>
            )}
          </form>
        </div>

        <Modal
          dialogClassName="preview-modal"
          isOpen={this.state.isPreview}
          toggle={() => {
            this.setState({ isPreview: !this.state.isPreview });
          }}
        >
          <ModalHeader
            toggle={() => {
              this.setState({ isPreview: !this.state.isPreview });
            }}
          >
            Preview
          </ModalHeader>
          <ModalBody>
            <Preview
              updateMainState={this.updateMainState}
              content={this.state.content}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => {
                this.setState({
                  isPreview: false,
                });
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profileReducer.user,
  };
};

export default connect(mapStateToProps)(CreatePost);
