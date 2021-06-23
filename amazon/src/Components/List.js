import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ol>
        {/* in jsx we can do this by maping so that we dont hard code everything */}
        {this.props.plans.map((plan, index) => (
          <li key={index}> {plan} </li>
        ))}
      </ol>
    );
  }
}

export default List;
