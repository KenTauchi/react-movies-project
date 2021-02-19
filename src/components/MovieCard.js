import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

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

export class MovieCard extends Component {
  render() {
    const {
      title,
      release_date,
      popularity,
      overview,
      poster_path,
    } = this.props;

    return (
      <Card>
        <CardMedia
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          label={"Movie Poster"}
        />
        <CardHeader
          title={title}
          subheader={`Release Date: ${release_date} | Popularity: ${popularity}`}
        />
        <CardContent>{overview}</CardContent>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieCard);
