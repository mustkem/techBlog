import { actionTypes } from "../ActionsTypes/actionTypes";
import axios from "axios";
import { API_URL } from "../../config";

export const addPost = (payload) => {
  return (dispatch) => {
    // axios({
    //   method: "post",
    //   url: API_URL + "/admin/feed/post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin"),
    //   },
    //   data:payload
    // })
    //   .then(function (response) {
    //       return response.data;
    //   })
    //   .catch(function (error) {
    //     return error;
    //   });
  };
};

export const getAdminPosts = (payload) => {
  return (dispatch, getState) => {
    axios({
      method: "get",
      url: API_URL + "/admin/feed/post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + localStorage.getItem("codemedium-token-admin"),
      },
      params: {
        user: "test",
      },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  };
};


export const testActionCreator = (payload) => {};



export const getPosts2 = () => {
  return (dispatch) => {
    dispatch(onGetPosts({ loading: true }));
    return axios({
      method: "get",
      url: API_URL + "/feed/posts",
    })
      .then(function (response) {
        dispatch(onGetPosts({ loading: false, posts: response.data.posts }));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


export const getPost2 = (slug) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: API_URL + "/feed/post/"+slug,
    })
      .then(function (response) {
        dispatch(onGetPost(response.data.post));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export function onGetPosts(payload) {
  return {
    type: actionTypes.GET_POSTS,
    payload: payload,
  };
}

export function onGetPost(payload) {
  return {
    type: actionTypes.GET_POST,
    payload: payload,
  };
}



export const login = (payload, history) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: API_URL + "/admin/auth/login",
      data: payload,
    })
      .then(function (response) {
        localStorage.setItem("codemedium-token-admin", response.data.token);
        dispatch(loginAction(response.data.user));
        history.push("/admin/posts/home");
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        alert("Wrong credentials");
      });
  };
};

export function loginAction(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
}
