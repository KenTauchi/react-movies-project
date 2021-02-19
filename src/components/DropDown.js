import React, { Component } from "react";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  dropDown: {
    width: "15%",
    margin: "0 6px 0 3px",
  },
});

class DropDown extends Component {
  render() {
    const {
      selectLists,
      classes,
      theme,
      onChange,
      type,
      dropDown,
    } = this.props;

    return (
      <FormControl variant="outlined" className={classes.dropDown}>
        <InputLabel id="demo-simple-select-outlined-label">
          {dropDown === "movie" || dropDown === "tv"
            ? "Category"
            : "Search Type"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          onChange={onChange}
          label="Type"
        >
          {selectLists.map((list) => (
            <MenuItem value={list.term}>{list.term}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DropDown);
