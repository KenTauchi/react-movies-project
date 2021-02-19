import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = (theme) => ({
  container: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: ".3fr 1fr",
    textAlign: "left",
  },
  img: {
    width: "300px",
    height: "500px",
  },
  textContainer: {
    alignSelf: "center",
  },
  header: { textAlign: "center" },
});

export class MovieCard extends Component {
  render() {
    const {
      title,
      release_date,
      popularity,
      overview,
      poster_path,
      classes,
      theme,
      name,
    } = this.props;

    return (
      <Card className={classes.container}>
        <CardMedia
          className={classes.img}
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          label={"Movie Poster"}
        />
        <div className={classes.textContainer}>
          <CardHeader
            title={title ? title : name}
            className={classes.header}
            subheader={`Release Date: ${release_date} | Popularity: ${popularity}`}
          />
          <CardContent>{overview}</CardContent>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieCard);
