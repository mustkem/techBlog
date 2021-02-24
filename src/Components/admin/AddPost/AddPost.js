import React from "react";
import Container from "@material-ui/core/Container";
import MyEditor from "./MyEditor";
import EditorConvertToHTML from "./EditorConvertToHTML";

import { connect } from "react-redux";
import { addPost } from "../../../Store/Actions/actions";


function AddPost(props) {

  return (
      <div className="add-post" style={{ padding: "50px 0" }}>
        <div className="container">
          <MyEditor
            addPost={props.addPost}
            content={""}
            title={""}
            desc={""}
            query={false}
            slug={false}
          />
          {/* <EditorConvertToHTML addPost={this.props.addPost} />> */}
        </div>
      </div>
  );
}

const mapStateToProps = (dispatch) => {
  return {
    addPost: (payload) => dispatch(addPost(payload)),
  };
};

export default connect(null, mapStateToProps)(AddPost);
