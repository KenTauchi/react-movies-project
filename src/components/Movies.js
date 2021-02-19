import React, { Component } from "react";
import { getMovies, getTvs, searchByKeyword } from "../services/api";
import MovieCard from "../components/MovieCard";
import DropDown from "../components/DropDown";

export class Movies extends Component {
  state = { type: "", dataList: [], message: "Please initiate a search" };

  componentDidMount = async () => {
    this.setState({
      type: this.props.dropDown !== "search" ? this.props.list[0].term : null,
      dataList:
        this.props.dropDown === "movie"
          ? await getMovies(this.props.list[0].term)
          : this.props.dropDown === "tv"
          ? await getTvs(this.props.list[0].term)
          : await this.props.searchDataList,
    });
  };

  render() {
    const { dropDown, list, searchType } = this.props;
    const { type, dataList, message } = this.state;
    const handleChange = async (event) => {
      this.setState({
        type: event.target.value,
        dataList:
          dropDown === "movie"
            ? await getMovies(event.target.value)
            : await getTvs(event.target.value),
      });
    };

    return (
      <div>
        {dropDown !== "search" ? (
          <DropDown
            selectLists={list}
            onChange={handleChange}
            type={type}
            dropDown={dropDown}
          />
        ) : null}

        {dataList ? (
          dataList.map((movie) => <MovieCard dataList={dataList} {...movie} />)
        ) : dataList === undefined ? (
          <h1>Sorry, there was no results</h1>
        ) : (
          <h1>{message}</h1>
        )}
      </div>
    );
  }
}

export default Movies;
