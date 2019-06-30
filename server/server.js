const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const movieList = [];
const movieData={};
app.get('/movie/:search', (req, res) => {
  console.log(req.params.search)
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?t=${req.params.search}&apikey=8730e0e`,
  }).then(response => {
    console.log('response.data', response.data, '\n')
    res.status(200).send(response.data);
    movieList[movieData];
  }).catch(err => {
    console.log('Error,', err.code, 'has occurred');
  })
});
app.get('/movie/:id', (req, res) => {
  
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?t=${req.params.id}&apikey=8730e0e`,
  }).then(response => {
    console.log('response.data', response.data, '\n')
    res.status(200).send(response.data);
    movieList[movieData];
  }).catch(err => {
    console.log('Error,', err.code, 'has occurred');
  })
});




// app.get('/movie/:str', (req, res) => {
//   const search = req.param.str;
  
//   if (!(search in movieList)) {
//     axios
//       .get(`http://www.omdbapi.com/?t=${search}&apikey=8730e0e`)
//       .then((moviesRes) => {
//         // if (moviesRes.data.Response === 'False') {
//         //   res.status(204).send('no movies found');
//         // }
//         const allMovies = moviesRes.data.map((search) => {
//           return axios.get(`http://www.omdbapi.com/?apikey=8730e0e&t=${search}`);
//         });
//         Promise.all(allMovies)
//           .then((movies) => {
//             const newSearchResults = movies.map(m => m.data);
//             movieList[search] = newSearchResults;
//             res.status(200).send(newSearchResults);
//           })
//           .catch(err => console.log("right here" + err.message));
//       })
//       .catch(err => console.log(err));
//   } else {
//     res.status(200).send(movieList[search]);
//   }
// });

module.exports = app;