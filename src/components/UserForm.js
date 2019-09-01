import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    bio: "",
    occupation: "",
    city: "",
    email: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, bio, occupation, city, email } = this.state;
    const values = { firstName, lastName, bio, occupation, city, email };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return <h2> Confirm submission</h2>;

      case 4:
        return <h2>Success</h2>;

      default:
        return <h2>Not found</h2>;
    }
  }
}

export default UserForm;
