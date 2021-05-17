import React from "react";
import { Link } from "react-router-dom";

import "./style/index.scss";

function PostItem(props) {
  const { item, index } = props;
  return (
    <li style={{margin:2}} className="post-card">
      <Link className="link title" to={"/" + item.slug}>
        <div className="post-content">
          <div  className="sec-1">
            <h4 style={{fontSize:12}}>
            <span style={{padding:4}}>{index+1}</span>
              
              {item.title}</h4>
            {/* <div className="desc">{item.desc}</div> */}
          </div>
          {/* <div className="sec-2">
              <div className="figure-content">
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614007213032/5oqCMexP9.webp?w=600&fit=crop&crop=entropy&auto=compress" />
              </div>
          </div> */}
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
