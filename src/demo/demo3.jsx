/*
  Class implementation of the settimeout and how this is different from the hooks and is it good or bad?
  It keep pointing to the latest state and props, instead of the individual render

  Expected result => 
  Real result => 
*/

import React, {Component} from "react";
import '../App.css';

export default class Example extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Click me
        </button>
      </div>
    )
  }
}
