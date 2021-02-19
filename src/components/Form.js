import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import DropDown from "../components/DropDown";
import { searchType } from "../services/ListData";

const styles = (theme) => ({
  form: {
    margin: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    width: "30%",
    margin: "0 6px",
  },
});

class Form extends Component {
  render() {
    const {
      onInputChange,
      onSubmit,
      classes,
      theme,
      type,
      onChange,
    } = this.props;

    return (
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          label="Search"
          name="recipeName"
          className={classes.textField}
          onChange={(e) => onInputChange(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <DropDown selectLists={searchType} onChange={onChange} type={type} />
        <Button variant="outlined" className={classes.button} type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Form);
