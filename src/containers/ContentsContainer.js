import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Movies from "../components/Movies";

import { movieType, tvType } from "../services/ListData";

class TabPanel extends Component {
  render() {
    const { children, value, index, ...other } = this.props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
});

export default class ContentsContainer extends Component {
  state = {
    value: 0,
  };

  render() {
    const { setType } = this.props;
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
    };

    const styles = {
      tab: {
        backgroundColor: "#E3E3E3",
      },
    };
    return (
      <div style={{ border: "1px solid black" }}>
        <Tabs
          value={this.state.value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "blue" } }}
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab label="MOVIES" style={styles.tab} />
          <Tab label="SEARCH RESULTS" style={styles.tab} />
          <Tab label="TV SHOWS" style={styles.tab} />
        </Tabs>

        <TabPanel value={this.state.value} index={0}>
          <Movies dropDown={"movie"} list={movieType} />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Movies dropDown={"search"} />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <Movies dropDown={"tv"} list={tvType} />
        </TabPanel>
      </div>
    );
  }
}
