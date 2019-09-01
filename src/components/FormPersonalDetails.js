import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MaterialAppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import MaterialButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <MaterialAppBar title="Enter User Details" />

          <TextField
            hintText="Enter your city"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />

          <br />

          <TextField
            hintText="Enter your occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />

          <br />

          <TextField
            hintText="Enter your bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />

          <br />

          <MaterialButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <MaterialButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
