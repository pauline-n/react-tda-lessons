import React, { Component } from "react";
import PropTypes from "prop-types";

class Students extends Component {
  render() {
    console.log(this.props);
    return <p>Students profiles</p>;
  }
}

Students.propTypes = {
  firstName: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  lastName: PropTypes.oneOf(["Viane", "Richard"]),
  age: PropTypes.number,
  details: PropTypes.array,
  french: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
};
export default Students;
