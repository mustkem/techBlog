import React from "react";

class Author extends React.Component {
  render() {
    return (
      <div className="author-wrap clearfix">
        <div id="authorBox">
          {/* <img src='images/download (1).jpg' /> */}
          <div>
            <h4>Mustkeem K</h4>
            <p>Software Engineer</p>
            {/* <p>Bay Area</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Author;
