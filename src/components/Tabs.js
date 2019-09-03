import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

  paperBackground: {
    backgroundColor: "#2e1534"
  }
});

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.paperBackground}>
      <StyledTabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <StyledTab label="Eureka" />
        <StyledTab label="Code Currents" />
        <StyledTab label="Volts" />
      </StyledTabs>
    </Paper>
  );
}
