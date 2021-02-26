import React from "react";
import { Link } from "react-router-dom";

import "./style/index.scss";

function PostItem(props) {
  const { item } = props;
  return (
    <li className="post-card">
      <Link className="link title" to={"/admin/" + item._id}>
        <div className="post-content">
          <div className="sec-1">
            <h2>{item.title}</h2>
            <div className="desc">{item.desc}</div>
          </div>
          <div className="sec-2">
              <div className="figure-content">
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614007213032/5oqCMexP9.webp?w=600&fit=crop&crop=entropy&auto=compress" />
              </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
