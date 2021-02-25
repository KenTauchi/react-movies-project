import React, { Component } from "react";
import { getMovies, getTvs, searchByKeyword } from "../services/api";
import MovieCard from "../components/MovieCard";
import DropDown from "../components/DropDown";

export class Movies extends Component {
  state = {
    type: "",
    dataList: [],
    keywordChange: false,
    dataChange: false,
  };

  componentDidMount = () => {
    this.get_example();
    this.setState({
      dataChange: false,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.searchDataList !== prevProps.searchDataList) {
      this.setState({ dataList: this.props.searchDataList, dataChange: true });
    } else if (this.props.keyword !== prevProps.keyword) {
      this.setState({ keywordChange: true, dataChange: false });
    }
  };

  async get_example() {
    const term =
      this.props.dropDown !== "search" ? this.props.list[0].term : null;
    const data =
      this.props.dropDown === "movie"
        ? await getMovies(this.props.list[0].term)
        : this.props.dropDown === "tv"
        ? await getTvs(this.props.list[0].term)
        : await this.props.searchDataList;

    this.setState({
      type: term,
      dataList: data,
    });
  }

  handleChange = async (event) => {
    this.setState({
      type: event.target.value,
      dataList:
        this.props.dropDown === "movie"
          ? await getMovies(event.target.value)
          : await getTvs(event.target.value),
    });
  };

  render() {
    const { dropDown, list, searchType, keyword } = this.props;
    const { type, dataList, keywordChange, dataChange } = this.state;

    console.log(
      "keywordChange",
      keywordChange,
      "keyword",
      keyword,
      "dataChange",
      dataChange,
      "dataList",
      dataList
    );

    return (
      <div>
        {dropDown !== "search" ? (
          <DropDown
            selectLists={list}
            onChange={this.handleChange}
            type={type}
            dropDown={dropDown}
          />
        ) : null}

        {!dataList && keyword === undefined ? (
          <h1>Loading</h1>
        ) : (keyword === "" && dataList === undefined) ||
          (keyword === "" && dataList !== undefined) ? (
          <h1>Please enter search</h1>
        ) : (!dataList && keyword !== "" && dataChange) ||
          (!dataList && keyword !== undefined && dataChange) ? (
          <h1>no results found</h1>
        ) : keywordChange && keyword !== "" && !dataChange ? (
          <h1>Please initiate a search</h1>
        ) : dataList.length > 0 && keyword !== "" ? (
          dataList.map((movie) => <MovieCard dataList={dataList} {...movie} />)
        ) : null}

        {/* {dataList !== undefined ? (
          dataList.map((movie) => <MovieCard dataList={dataList} {...movie} />)
        ) : dataList.length === 0 && keyword.length > 0 ? (
          <h1>no results found</h1>
        ) : keywordChange && keyword.length > 0 ? (
          <h1>Please initate a search</h1>
        ) : keyword.length === 0 && !keywordChange ? (
          <h1>Please enter search</h1>
        ) : (
          <h1>Didn't catch anything</h1>
        )} */}

        {/* {keywordChange ? (
          <h1>Please initate a search</h1>
        ) : resultReady ? (
          dataList.map((movie) => <MovieCard dataList={dataList} {...movie} />)
        ) : !keyword && (dataList.length === 0 || dataList === undefined) ? (
          <h1>Please enter search</h1>
        ) : (
          <h1>no results found</h1>
        )} */}
      </div>
    );
  }
}

export default Movies;
