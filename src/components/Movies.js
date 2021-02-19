import React, { Component } from "react";
import { getMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import DropDown from "../components/DropDown";

export class Movies extends Component {
  state = { type: "", dataList: [] };

  componentDidMount = async () => {
    this.setState({
      type: this.props.list[0].term,
      dataList: await getMovies(this.props.list[0].term),
    });

    console.log("componentDidMounnt rendered");
  };

  render() {
    const { dropDown, list } = this.props;
    const { type, dataList } = this.state;
    const handleChange = async (event) => {
      this.setState({
        type: event.target.value,
        dataList: await getMovies(event.target.value),
      });
    };

    console.log("dataList", dataList);

    return (
      <div>
        {dropDown ? (
          <DropDown
            selectLists={list}
            onChange={handleChange}
            type={type}
            dropDown={dropDown}
          />
        ) : null}

        {dataList.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
