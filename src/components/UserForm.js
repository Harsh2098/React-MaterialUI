import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import ConfirmSubmission from "./ConfirmSubmission";
import CenteredTabs from "./Tabs";

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
        return <CenteredTabs />;

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
        return (
          <ConfirmSubmission
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );

      case 4:
        return <h2>Success</h2>;

      default:
        return <h2>Not found</h2>;
    }
  }
}

export default UserForm;
