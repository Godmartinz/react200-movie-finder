import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStateToProps(store) {
  return {
    title: store.get.title,
    movies: store.get.movies,
    movieInfo: store.get.movieInfo,
    poster: store.get.poster,
    imdbRating:store.get,
    title: store.get.title,
    genre: store.get.genre,
    year:store.get.year,
    plot: store.get.plot,
    metascore:store.get.metascore,
    runtime:store.get.runtime,
    awards:store.get.awards
  };
}

export default connect(mapStateToProps)(MovieDetailContainer);
