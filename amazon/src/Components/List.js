import React from "react";
// import { Button } from "react-bootsrap";

function List() {
  const addEvent = () => {
    alert("hello am an event");
  };

  return (
    <div>
      <ol>
        {this.props.plans.map((plan, index) => (
          <li> {plan} </li>
        ))}
      </ol>
      {/* <Button variant="primary" onClick={addEvent}>
        Primary
      </Button> */}
    </div>
  );
}

export default List;
