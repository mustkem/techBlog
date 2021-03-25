import React from "react";
import { Link } from "react-router-dom";

import { API_URL } from '../../../../config'

import "./style/index.scss";

function PostItem(props) {
  const { item } = props;
  return (
    <li className="post-card">
      <Link className="link title"  to={"/" + item.slug}>
        <div className="post-content">
          <div className="sec-1">
            <div>
              <h2>{item.title}</h2>
              <div className="desc">{item.desc}</div>
            </div>
            <div className="category-sec">
              {item.categories && item.categories.map((item) => {
                return <div className="category"> {item.label} </div>;
              })}
            </div>
          </div>
          <div className="sec-2">
            <div className="figure-content">
            <img src={"data:image/png;base64,"+item.bolbImageUrl} />
              {/* <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={API_URL + "/" + item.imageUrl} /> */}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;

// <li className="post-card">
//       <Link className="link title" to={"/" + item.slug}>
//         <div className="post-content">
//           <div className="sec-1">
//             <h2>{item.title}</h2>
//             <div className="desc">{item.desc}</div>
//           </div>
//           <div className="sec-2">
//               <div className="figure-content">
//                 <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614007213032/5oqCMexP9.webp?w=600&fit=crop&crop=entropy&auto=compress" />
//               </div>
//           </div>
//         </div>
//       </Link>
//     </li>
