import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "draft-js/dist/Draft.css";
import "./App.scss";
import "./css/prism.css";


import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeContainer from "./Containers/HomeContainer/HomeContainer";
import PostDetail from "./Containers/PostDetail/PostDetail";

import Admin from "./Components/admin/Admin";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route exact path="/:slug" component={PostDetail} />
            <Route exact path="/" component={HomeContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
