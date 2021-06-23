import React, { Component } from "react";
import ReactDOM from "react-dom";

// const plans = ["learn react", "study", "develop"];

// JSX
// props is short for properties and we can use them to pass information from one component to another
// we can change these into components

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

class Title extends Component {
  render() {
    return <h1>plans</h1>;
  }
}

class MainBody extends Component {
  render() {
    return (
      <div>
        {/* we pass the props here and can give different values */}
        <Title />
        <List plans={["hello there", "my plan for today is"]} />
        <List plans={["Talk to bod members", "go to the supermarket"]} />
      </div>
    );
  }
}

// donot forget to put a self closingtag for MainBody in the render below so that it displays this page
ReactDOM.render(<MainBody />, document.getElementById("root"));
