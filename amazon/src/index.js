import React from "react";
import ReactDOM from "react-dom";

const plans = ["learn react", "study", "develop"];
// JSX
const element = (
  // but for u to have other elents u need to have one main div tag covering all your other elements
  <div>
    <h1>plans</h1>
    <ol>
      {/* in jsx we can do this by maping so that we dont hard code everything */}
      {plans.map((plan, index) => (
        <li key={index}> {plan} </li>
      ))}
    </ol>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
