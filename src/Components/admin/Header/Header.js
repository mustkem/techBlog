import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default (props) => {
  const user = useSelector((state) => {
    return state.profileReducer.user;
  });

  const history = useHistory();


  return (
    <div style={{ marginBottom: 50 }} className="header top admin-header">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="header-content" style={{ display: "flex" }}>
            <div className="logo-wrp">
              <Link to="/admin/posts/home">
                <img
                  style={{ minWidth: 35 }}
                  className="logo"
                  src="/images/logo.png"
                />
                <span style={{ position: "relative", top: 1, marginLeft: 8 }}>
                  Code Medium
                </span>
              </Link>
            </div>
            <ul className="navbar-main">
              <li>
                <Link
                  className=""
                  to="/admin/add/post"
                >
                  Add Post
                </Link>
              </li>
              <li>
                <Link
                  className=""
                  to="/admin/add/post2"
                >
                  Add Post 2
                </Link>
              </li>
              {/* <li>
            <a className="javascript" href="/">Javascript</a>
          </li> */}
            </ul>
          </div>
          <div
            style={{
              padding: "18px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div>{user && user.name}</div>
            <Button
            variant="light"
            size="sm"
              style={{
                marginLeft:30
              }}
              onClick={()=>{
                localStorage.removeItem("codemedium-token-admin");
                history.push("/admin")
              }}
            >
              Logout
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
