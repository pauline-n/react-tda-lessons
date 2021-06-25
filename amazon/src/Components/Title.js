import React, { Component } from "react";

class Title extends Component {
  render() {
    // inline stylingily: "Arial"
    return <h1 style={{ fontSize: 20 }}>Plans</h1>;
  }
}

// React
// addEvent(){
//   alert('Hello am an event')
// }
// <Button onClick={addEvent}> Click me </Button>

// // html
// onclick="addEvent()"
export default Title;
