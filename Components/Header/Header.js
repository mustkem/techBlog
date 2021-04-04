import React from "react";
import { useRouter } from 'next/router'

import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { Button } from "react-bootstrap";

import * as homeActions from "../../Store/Actions/actions";

const Header = (props) => {

  const router = useRouter()

  const hadlePageChange = (payload) => {
    const query = {};
    query.category = payload.category;
    const newQuery ={};

    Object.keys(query).forEach(key=>{
      if(query[key]){
        newQuery[key] = query[key]; 
      }
    });

    router.push("/category/" + payload.category);
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
                router.push("/");
                props.getPosts({});
              }}
              style={{display:"flex", background:"transparent"}}
            >
               <span
                style={{
                  background: "blue",
                  color: "#fff",
                  width: 25,
                  height: 25,
                  lineHeight: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight:"bold"
                }}
                
              >T</span>
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
