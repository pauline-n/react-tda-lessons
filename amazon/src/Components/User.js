import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>User Details</h1>
      </div>
    );
  }
}

// User.propTypes = {
//   //   firstName: PropTypes.string,
//   firstName: PropTypes.oneOf(["Robin"]),
//   lastName: PropTypes.string,
//   age: PropTypes.number,
//   hobbies: PropTypes.array,
//   french: PropTypes.bool,
//   message: PropTypes.func,
//   car: PropTypes.object,
// };
export default User;
