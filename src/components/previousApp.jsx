import React from "react";
import "../style/app.scss";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image:
    "https://i1.wp.com/itc.ua/wp-content/uploads/2019/04/The_Avengers_Endgame_i00.jpg",
  overview:
    "As the Avengers and tratatata tatatata taatatata bum bumb umb falalalalalalala!!Bingo!"
};
class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.state);
    return (
      <div style={{ width: "400px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function Image(props) {
  const { src, alt } = props;
  return <img width="100%" src={src} alt={alt} />;
}

function previousApp() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default previousApp;
