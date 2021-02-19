import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContentsContainer from "../containers/ContentsContainer";
import Form from "../components/Form";

export class MainContainer extends Component {
  state = { setType: "" };

  render() {
    const { setType } = this.state;
    const handleChange = (event) => {
      this.setState({ setType: event.target.value });
    };

    return (
      <div style={{ width: "95%" }}>
        <Form type={setType} onChange={handleChange} />
        <ContentsContainer setType={setType} />
      </div>
    );
  }
}

export default MainContainer;
