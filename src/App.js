import React from 'react';
import 'typeface-roboto';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';
import './App.scss';

import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import AddPostContainer from './Containers/AddPostContainer/AddPostContainer';
import PostsContainer from './Containers/PostsContainer/PostsContainer';
import LoginAdmin from './Components/admin/Login';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                <Route path="/add-post" component={AddPostContainer}/>
                

                <Route exact path="/admin" component={LoginAdmin}/>
                <Route exact path="/:slug" component={PostsContainer}/>
                <Route exact path="/" component={HomeContainer}/>


                
            </Switch>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
