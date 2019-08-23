import { actionTypes } from '../ActionsTypes/actionTypes';

export const addPost = (payload)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const fireStore = getFirestore();
        fireStore.collection('posts').add(
        {
            ...payload
        }
        ).then((res)=>{
            dispatch({
                type : actionTypes.ADD_POST,
                payload
            })
        }).catch((err)=>{
            console.log(err);
        })
        
    }
}



export const getPosts = (payload)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const fireStore = getFirestore();
        fireStore.collection("posts").get().then(function(querySnapshot) {
            let jsonData = [];
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                jsonData.push(doc.data())
            });
            window.posts = jsonData;
            //dispatch(onGetPosts)
        });
        
    }
}

// export function onGetPosts(payload) {
//     return (
//       {
//         type : actionTypes.GET_POSTS,
//         payload:payload,
//         type2: actionTypes.GET_POSTS,
//         test:"test"
//       }
//     )
//   }

