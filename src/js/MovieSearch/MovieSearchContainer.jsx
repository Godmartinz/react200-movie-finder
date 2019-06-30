import React from "react";
import { Link } from 'react-router-dom';
import { goSearch, getMovies } from './movieSearchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleSearch() {
    const { search, dispatch } = this.props;
    dispatch(getMovies(search));
  }
  handleChange(e){
    e.preventDefault();
    // const { value }  = event.target ;
    const { dispatch } = this.props;
    dispatch(goSearch(e.target.value));
  }
  handleButton(event) {
    e.preventDefault();

    if (event.keyCode === 13 || event.which === 13) {
      this.handleSearch();
    }
  }
  render() {
    const {value, movies}=this.props;
    return (
      <div className="container">
        <h1 className="text-center my-5 page-title">Movie Finder</h1>
        <div className="input-group mb-5">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Enter Movie Title"
            value= { value}
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
          />
          <div className="input-group-append">
            <button
              id="searchBtn"
              className="btn btn-dark"
              type="submit"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
            <div
              id="searchResults"
              className="card border border-dark p-3 mb-2"
              key={movies.imdbID}
            >
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-3">
                    {movies.Poster !== "N/A" && (
                      <img
                        src={movies.Poster}
                        alt='Poster'
                        className="border border-dark img-fluid"
                      />
                    )}
                  </div>
                  <div className="col-9">
                    <h4>{movies.Title}</h4>
                    <h6>{movies.Year}</h6>
                    <hr />
                    <p>{movies.Plot}</p>
                    <Link
                      to={{
                        pathname: `/movie/${movies.imdbID}`,
                        state: { movies }
                      }}
                      className="btn btn-primary float-right detail-link"

                    >
                      More Information
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          
        <div id="error" className="text-danger">
          {this.props.error}
        </div>
      </div>
    );
  }
}

export default MovieSearchContainer;
