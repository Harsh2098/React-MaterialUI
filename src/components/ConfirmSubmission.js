import React, { Component } from "react";

import { List, ListItem } from "material-ui/List";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MaterialAppBar from "material-ui/AppBar";
import MaterialButton from "material-ui/RaisedButton";

export class ConfirmSubmission extends Component {
  continue = e => {
    e.preventDefault();

    /* Send API request */

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <MaterialAppBar title="Confirm Submission" />

          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={values.firstName}
            />

            <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          </List>

          <br />

          <MaterialButton
            label="Submit"
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

export default ConfirmSubmission;
