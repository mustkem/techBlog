import React from 'react';
import { BrowserRouter, Switch, Route,  useParams,
    useRouteMatch } from 'react-router-dom';

    
import AddPostContainer from '../../Containers/AddPostContainer/AddPostContainer';
import PostsContainer from '../../Containers/PostsContainer/PostsContainer';

import AdminPosts from './Home/Home'

import LoginAdmin from './Login';

import PostDetail from './PostDetail/PostDetail'



function Admin() {

    let { path, url } = useRouteMatch();

    console.log("path", path)

    return (
        <div>
            <Switch>

                {/* <Route exact path="/admin" component={LoginAdmin}/>
                <Route exact path="/admin/:slug" component={PostsContainer}/>
                <Route exact path="/admin/posts/home" component={AdminPosts}/>

                <Route exact path="/admin/add/post" component={AddPostContainer}/> */}

                <Route exact path={path}>
                    <LoginAdmin />
                </Route>
                
                <Route exact path={`${path}/posts/home`}>
                    <AdminPosts />
                </Route>
                <Route exact path={`${path}/add/post`}>
                    <AddPostContainer />
                </Route>

                <Route exact path={`${path}/:postId`}>
                    <PostDetail />
                </Route>
                
                
            </Switch>
        </div>
    )
}

export default Admin
