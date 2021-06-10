import React from "react";
import { withRouter } from "next/router";


import axios from "axios";
import { connect } from "react-redux";

import { API_URL } from "../../config";
import { loginAction } from "../../Store/Actions/actions";

import AdminPosts from "./Home/Home";
import LoginAdmin from "./Login";
import PostDetail from "./PostDetail/PostDetail";
import CreatePost from "./CreatePost";

function Admin(props) {

  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    return axios({
      method: "get",
      url: API_URL + "/admin/auth/status",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
    })
      .then(function (response) {
        setIsValid(true);
        props.loginAction(response.data.user);
        return response.data;
      })
      .catch(function (error) {
        setIsValid(false);
        history.push("/admin");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <LoginAdmin />
        </Route>
      </Switch>
      {/* {isValid && ( */}
      <Switch>
        <Route exact path={`${path}/add/post`} component={CreatePost} />
        <Route exact path={`${path}/posts/home`}>
          <AdminPosts />
        </Route>
        <Route exact path={`${path}/:postId`}>
          <PostDetail />
        </Route>
      </Switch>
      {/* )} */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (payload) => dispatch(loginAction(payload)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Admin));
