import React, { Component } from "react";
import Title from "./Title";
import List from "./List";
// import User from "./User";
import Students from "./Students";
import "../App.css";

class MainBody extends Component {
  state = {
    firstName: 100,
    lastName: "Vianne",
    age: 23,
    details: ["registered students", "has a laptop"],
    french: true,
    message() {
      console.log("Hello there");
    },
    car: { brand: "Mercedes", model: "Benz201", color: "Blue" },
  };

  render() {
    return (
      <div>
        <Title />
        <Students {...this.state} />
        {/* <User {...this.state} /> */}

        <List plans={["hello there", "my plan for today is"]} />
        <List plans={["Talk to bod members", "go to the supermarket"]} />
      </div>
    );
  }
}

export default MainBody;
