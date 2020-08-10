import React from "react";

class MyComp extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.testAction().then(() => {
      console.log("test");
    });
  }
  render() {
    return <div>{/* test */}</div>;
  }
}

export default MyComp;
