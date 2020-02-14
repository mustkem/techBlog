import React from 'react';
import 'typeface-roboto';
import 'draft-js/dist/Draft.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import AddPostContainer from './Containers/AddPostContainer/AddPostContainer';
import PostsContainer from './Containers/PostsContainer/PostsContainer';
import Extra from './Components/Extra';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/add-post" component={AddPostContainer}/>
                <Route exact path="/extra" component={Extra}/>
                <Route exact path="/:slug" component={PostsContainer}/>
                
            </Switch>
          </Layout>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
