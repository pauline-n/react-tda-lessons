import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ol>
        {this.props.plans.map((plan, index) => (
          <li key={index}> {plan} </li>
        ))}
      </ol>
    );
  }
}

export default List;
