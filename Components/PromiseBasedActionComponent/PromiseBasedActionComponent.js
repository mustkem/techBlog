import React from "react";

class MyComp extends React.Component {
  componentDidMount() {
    this.props.testAction().then(() => {
    });
  }
  render() {
    return <div>{/* test */}</div>;
  }
}

export default MyComp;
