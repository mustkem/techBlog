import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBanner from "./SideBanner/SideBanner";

const Layout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="layout"
    >
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-9">{props.children}</div>
            <div className="col-3">
              <SideBanner />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
