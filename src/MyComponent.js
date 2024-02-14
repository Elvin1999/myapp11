import React, { Component, StrictMode } from "react";

export default class MyComponent extends Component {
  name = "John";

  constructor(props) {
    super(props);

    this.state = { counter: 0, error: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  componentDidCatch(error) {
    this.setState({
      error: true,
    });
    alert(error);
  }

  render() {
    return (
      <div>
        {/* <StrictMode>
          {!this.state.error ? (
            <h1 style={{ color: "red" }}> Some error occurred </h1>
          ) : (
            <TestComponent></TestComponent>
          )}
        </StrictMode> */}
        <StrictMode>
          <TestComponent></TestComponent>
        </StrictMode>
        <h1>{this.props.title}</h1>
        <hr />
        <h2>{this.name}</h2>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increase Value</button>
      </div>
    );
  }
}

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
      </div>
    );
  }
}
