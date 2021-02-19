import "./App.css";

import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";

export class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Movies App</h1>

          <MainContainer />
        </header>
      </div>
    );
  }
}

export default App;
