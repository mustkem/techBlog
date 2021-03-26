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
            <div>
              <h2>{item.title}</h2>
              <div className="desc">{item.desc}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                marginTop:5
              }}
            >
              <div>
                <div>Written by</div>
                <div>{props.user.name}</div>
              </div>

              <div className="category-sec">
                {item.categories.map((item) => {
                  return <div className="category"> {item.label} </div>;
                })}
              </div>
            </div>
          </div>
          <div className="sec-2">
            <div className="figure-content">
              <img src={"data:image/png;base64," + item.bolbImageUrl} />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
