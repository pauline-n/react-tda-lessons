import React from "react";
import ReactDOM from "react-dom";

const plans = ["learn react", "study", "develop"];
const element = React.createElement(
  "ol",
  null,
  plans.map((plan, index) => React.createElement("li", { key: index }, plan))
);
ReactDOM.render(element, document.getElementById("root"));
