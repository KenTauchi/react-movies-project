import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContentsContainer from "../containers/ContentsContainer";
import Form from "../components/Form";
import { searchType } from "../services/ListData";
import { searchByKeyword } from "../services/api";

export class MainContainer extends Component {
  state = { setType: "", keyword: "", dataList: [] };

  componentDidMount = () => {
    this.setState({
      setType: searchType[0].term,
    });
  };

  render() {
    const { setType, keyword, dataList } = this.state;
    const handleChange = (event) => {
      this.setState({ setType: event.target.value });
    };
    const handleInputChange = (keyword) => {
      this.setState({
        keyword,
      });
    };

    const fetchByKeyword = async (e) => {
      const { dataList, setType, keyword } = this.state;
      e.preventDefault();

      this.setState({
        dataList: await searchByKeyword(setType, keyword),
      });
    };

    return (
      <div style={{ width: "95%" }}>
        <Form
          type={setType}
          onChange={handleChange}
          list={searchType}
          onInputChange={handleInputChange}
          onSubmit={fetchByKeyword}
        />
        <ContentsContainer
          type={setType}
          keyword={keyword}
          searchDataList={dataList}
        />
      </div>
    );
  }
}

export default MainContainer;
