const axios = require('axios').default;

const URI = 'https://api.themoviedb.org/3/';
const API_KEY = '52671e5fdac66fed8f134cf47bc0c7d2';

async function fetchMovies(endpoint, query) {
  const response = await axios
    .get(`${URI}${endpoint}/${query}?api_key=${API_KEY}`)
    .then(res => {
      return res.data.results;
    });

  return response;
}

export default fetchMovies;
