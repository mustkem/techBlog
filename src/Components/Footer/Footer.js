import React from "react";
import PromiseBasedActionComponent from "../../Containers/promiseBasedActionContianer";

export default (props) => {
  return (
    <div
      style={{ background: "aliceblue", fontSize: 12, padding: "15px 0" }}
      className="footer"
    >
      <div className="container">
        <div className="header-content" style={{ display: "flex" }}>
          <div className="logo-wrp">Copyright @ Tutorial Medium</div>
          <div className="logo-wrp" style={{ marginLeft: 15 }}>
            Contact us on contact@tutorialmedium.com
          </div>
          {/* <ul className="navbar-main">
          <li>
            <a className="react" href="/">React</a>
          </li>
          <li>
            <a className="javascript" href="/">Javascript</a>
          </li>
        </ul> */}
        </div>
      </div>
      <PromiseBasedActionComponent />
    </div>
  );
};
