import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { Button } from "react-bootstrap";

import * as homeActions from "../../Store/Actions/actions";

const Header = (props) => {
  console.log("test")
  const hadlePageChange = (payload) => {
    const query = parse(props.location.search);
    query.category = payload.category;
    const newQuery ={};

    Object.keys(query).forEach(key=>{
      if(query[key]){
        newQuery[key] = query[key]; 
      }
    })
    props.history.push("/?" + stringify(newQuery));
    props.getPosts(query);
  };

  return (
    <div className="header top">
      <div className="container">
        <div className="header-content" style={{ display: "flex" }}>
          <div className="logo-wrp">
            <div
              className="logo-sec"
              onClick={() => {
                hadlePageChange({ category: "" });
              }}
            >
              <img
                style={{ minWidth: 35 }}
                className="logo"
                src="/images/logo.png"
              />
              <span className="sub-title" style={{ position: "relative", top: 1, marginLeft: 8 }}>
              Tutorial Medium
              </span>
            </div>
          </div>
          <ul className="navbar-main">
            <li>
              <Button
                className="link react"
                onClick={() => {
                  hadlePageChange({ category: "react" });
                }}
              >
                React
              </Button>
            </li>
            <li>
              <Button
                className="link javascript"
                onClick={() => {
                  hadlePageChange({ category: "javascript" });
                }}
              >
                Javascript
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (payload) => dispatch(homeActions.getPosts2(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
