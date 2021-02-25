import "./App.css";

import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={styles.head}>
            React Movies App
          </h1>

          <MainContainer />
        </header>
      </div>
    );
  }
}

const styles = {
  head: {
    border: "5px solid black",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
};
export default App;
