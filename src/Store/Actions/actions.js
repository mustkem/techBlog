import { actionTypes } from "../ActionsTypes/actionTypes";
import axios from 'axios';
import { API_URL } from "../../config";

export const addPost = (payload) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

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
    return (dispatch, getState, { getFirebase, getFirestore }) => {
  
        axios({
            method: "get",
            url: API_URL + "/admin/feed/post",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("codemedium-token-admin"),
            },
            params:{
                user:"test"
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
            return error;
            });
  
    };
  };

  

// const fireStore = getFirestore();
// fireStore.collection('posts').add(
//     {
//         ...payload.dataToPost
//     }
// ).then((res) => {
//     dispatch({
//         type: actionTypes.ADD_POST,
//         payload: payload.dataToPost
//     })
// }).catch((err) => {
//     console.log(err);
// })

export const testActionCreator = (payload) => {};

export const getPosts = (payload) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("posts")
      .get()
      .then(function (querySnapshot) {
        let jsonData = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          jsonData.push(doc.data());
        });
        window.posts = jsonData;
        dispatch(onGetPosts(jsonData));
      });
  };
};

export const getPost = (payload) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    let postsRef = fireStore.collection("posts");
    postsRef
      .where("slug", "==", payload.slug)
      .get()
      .then(function (querySnapshot) {
        let jsonData = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          jsonData.push(doc.data());
        });
        window.post = jsonData;
        //dispatch(onGetPosts(jsonData));
      });
  };
};

export function onGetPosts(payload) {
  return {
    type: actionTypes.GET_POSTS,
    payload: payload,
  };
}

export const updatePost = (payload) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();

    let postsRef = fireStore.collection("posts");
    postsRef
      .where("slug", "==", payload.query.slug)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          // Build doc ref from doc.id
          postsRef.doc(doc.id).update(payload.dataToPost);
        });
      });
  };
};

export const login = (payload) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

   return axios({
      method: "post",
      url: API_URL + "/admin/auth/login",
      data: payload,
    })
      .then(function (response) {
        localStorage.setItem("codemedium-token-admin", response.data.token);
        dispatch(loginAction(response.data.user));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  };
};


export function loginAction(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload
  }
}

