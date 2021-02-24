import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';
import './App.scss';

import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeContainer from './Containers/HomeContainer/HomeContainer';
import AddPostContainer from './Containers/AddPostContainer/AddPostContainer';
import PostsContainer from './Containers/PostsContainer/PostsContainer';
import PostDetail from './Containers/PostDetail/PostDetail';

import AdminPosts from './Components/admin/Home/Home'

import LoginAdmin from './Components/admin/Login';

import Admin from './Components/admin/Admin'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                {/* <Route path="/add-post" component={AddPostContainer}/> */}

                 <Route path="/admin" component={Admin}/>
                {/*<Route exact path="/admin/:slug" component={PostsContainer}/>
                <Route exact path="/admin/posts/home" component={AdminPosts}/>

                <Route exact path="/admin/add/post" component={AddPostContainer}/> */}


                <Route exact path="/:slug" component={PostDetail}/>

                <Route exact path="/" component={HomeContainer}/>




                
            </Switch>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
