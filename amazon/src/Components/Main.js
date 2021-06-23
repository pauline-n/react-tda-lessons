import React, { Component } from "react";
import Title from "./Title";
import List from "./List";

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

export default MainBody;
