import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log(0);
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log(1);
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
