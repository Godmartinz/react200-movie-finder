import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    movies: store.get.movies,
    search: store.get.search,
    error: store.get.error
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);