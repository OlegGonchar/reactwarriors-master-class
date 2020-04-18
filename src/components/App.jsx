import React from "react";

import MovieItem from "./MovieItem";
import { moviesData } from "../moviesData";

import "../style/app.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMovieswillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovieswillWatch
    });
    console.log(updateMovieswillWatch);
    console.log(this.state);
  };

  removeMovieWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieWillWatch={this.removeMovieWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
