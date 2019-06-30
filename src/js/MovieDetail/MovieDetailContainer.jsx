import React from "react";
import { Link } from "react-router-dom";
import { getById } from "../MovieSearch/movieSearchActions.js";

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { dispatch }= this.props;
    dispatch(getById(this.props.match.params.id));
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="">
        <h1 className="text-center my-5">Movie Results</h1>
        <Link to="/">Go Back</Link>
        <div className="card p-3 my-2 border border-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                {movies.Poster !== "N/A" && (
                  <img
                    src={movies.Poster}
                    alt="Poster"
                    className="border border-dark img-fluid"
                  />
                )}
              </div>
              <div className="col-9">
                <div className="card">
                  <div className="card-heading bg-secondary text-dark p-2 ">
                    Movies Details
                  </div>
                  <div className="card-body">
                    <h3 className="title text-bold">{movies.Title}</h3>
                    <p style={{ lineHeight: "2em" }}>
                      <span className="bg-success text-dark rounded py-1 px-2">
                        {movies.Year}
                      </span>
                      <span className="bg-success text-dark rounded py-1 px-2 mx-2">
                        {movies.Runtime}
                      </span>
                      <span className="bg-success text-dark rounded py-1 px-2">
                        {movies.Genre}
                      </span>
                    </p>
                    <p>{movies.Plot}</p>
                    <p>{movies.Awards}</p>
                    <p>
                      <span className="font-weight-bold">Metascore:</span>{" "}
                      {movies.Metascore}
                    </p>
                    <p>
                      <span className="font-weight-bold">IMDB:</span>{" "}
                      {movies.imdbRating}/10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieDetailContainer;
