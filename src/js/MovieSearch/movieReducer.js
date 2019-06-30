const defaultState = {
    movies: [],
    title: "",
    genre: "",
    poster:"",
    year: 0,
    rated: "",
    plot: "",
    awards:"",
    runtime:"",
    metascore: "",
    imdbRating:0.0,
    id: "",
    error: '',
};

export default function movieReducer(state = defaultState, action){
    const {type, payload }= action;
    switch(type) {
        case 'GET_MOVIES_FULFILLED': {
            console.log( "got it");
            if (payload.status ===200) {
                return{
                    ...state,
                    movies: payload.data,
                    title: payload.data.title,
                    genre: payload.data.runtime,
                    poster: payload.data.Poster,
                    year: payload.data.Year,
                    rated: payload.data.Rated,
                    plot: payload.data.Plot,
                    awards: payload.data.Awards,
                    runtime: payload.data.Runtime,
                    metascore: payload.data.Metascore,
                    imdbRating: payload.data.imdbRating,
                    id: payload.data.imdbID,
                    error: ''
                };
            }
            console.log("Couldn't find that Movie");
            return {
                ...state,
                search: "",
                error: "No matches found"
            }
        }
        case "GET_MOVIE_FAIL": {
            console.log(`Failed ${payload.data}`);
            return{
                ...state,
                movies:[],
                error: "GET_MOVIE_FAIL: something went wrong."
            };

        }
        case "SEARCH_MOVIE": {
            return {
                ...state,
                search: payload.search
            };
        }
        default:
            return state;
    }
}