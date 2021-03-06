import React, { Component } from "react";

class ClassIntervalCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  UNSAFE_componentWillUnMount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>the Count : {this.state.count}</h1>
      </div>
    );
  }
}

export default ClassIntervalCounter;
