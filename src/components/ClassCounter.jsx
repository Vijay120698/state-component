import React, { Component } from 'react';

class CounterClass extends Component {    //React.Component
  constructor() {
    super();
    
    this.state = { count: 10 };
  }

  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement =()=>{
    this.setState({count: this.state.count -1})
  }
  multiply=()=>{
    this.setState({count: this.state.count *2})
  }

  render() {
    return (
      <div>
        <h1>Counter (Class Component)</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}> decrement</button>
        <button onClick={this.multiply}>Multiply</button>
      </div>
    );
  }
}

export default CounterClass;
