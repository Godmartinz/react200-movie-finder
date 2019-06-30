import axios from 'axios';

export const getMovies = (search)=> {

    return {
        type: 'GET_MOVIES',
        payload:  axios.get(`/movie/${search}`)
    };
};

export function goSearch(search){
    return {
        type: "SEARCH_MOVIE",
        payload: { search }
    };
}
export const getById = (id) => {
    return {
      type: 'GET_INFO',
      payload: axios.get(`/movie/${id}`)
    }
  }