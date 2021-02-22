import React from "react";
import { Link } from "react-router-dom";
import PromiseBasedActionComponent from "../../Containers/promiseBasedActionContianer";

export default (props) => {
  return (
    <div className="header top">
      <div className="container" >
        <div className="header-content"  style={{display:"flex"}}>
        <div className="logo-wrp">
          <Link to="/">
          <img style={{minWidth:35}} className="logo" src="/images/logo.png" />
            <span style={{position:"relative", top:1, marginLeft:8}}>
            Code Medium
            </span>
          </Link>
        </div>
        <ul className="navbar-main">
          <li>
            <a className="react" href="/">React</a>
          </li>
          <li>
            <a className="javascript" href="/">Javascript</a>
          </li>
          
        </ul>
        </div>
      </div>
      <PromiseBasedActionComponent />
    </div>
  );
};
