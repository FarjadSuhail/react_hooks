import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  //   componentDidUpdate() {
  //     console.log("title update");
  //     // running unnecesaarily
  //     document.title = `Clicked ${this.state.count} times`;
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState.count);
    console.log("state", this.state.count);

    if (prevState.count != this.state.count) {
      document.title = `Clicked ${this.state.count} times`;
      console.log("title update");
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
