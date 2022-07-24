const axios = require('axios').default;

const URI = 'https://api.themoviedb.org/3/';
const API_KEY = '52671e5fdac66fed8f134cf47bc0c7d2';

export async function fetchMovies(endpoint = 'trending/all/week', query) {
  if (endpoint === null) {
    return;
  }
  const response = await axios
    .get(`${URI}${endpoint}${query ? '/' + query : ''}?api_key=${API_KEY}`)
    .then(res => {
      return res.data;
    });
  // console.log('res', response);

  // const movieHeadingData = [
  //   response.results.map(({ id, original_title, name }) => {
  //     return { id, original_title, name };
  //   }),
  // ];
  // console.log('MHD', movieHeadingData);
  return response;
}


export async function fetchMovieById(id) {
  try {
    const { poster_path, original_title, vote_average, overview, genres } =
      await axios.get(`${URI}movie/${id}?api_key=${API_KEY}`).then(res => {
        return res.data;
      });

    const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return {
      posterPath,
      original_title,
      vote_average,
      overview,
      genres,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchCrew(id) {
  const fetchCrew = await axios
    .get(`${URI}movie/${id}/credits?api_key=${API_KEY}`)
    .then(res => {
      return res.data.crew;
    });

  const crewInfo = fetchCrew.map(member => {
    const { profile_path, name, job, id } = member;
    return { profile_path, name, job, id };
  });

  const filterCrew = new Map(crewInfo.map(crew => [crew.id, crew]));
  const filteredCrew = [...filterCrew.values()];

  return filteredCrew;
}
export async function fetchReviews(id) {
  const fetchReviews = await axios
    .get(`${URI}movie/${id}/reviews?api_key=${API_KEY}`)
    .then(res => {
      return res.data.results;
    });

  const reviewInfo = fetchReviews.map(review => {
    const { author, content, id } = review;
    return { author, content, id };
  });
  return reviewInfo;
}

export async function searchMovies(queue) {
  const searchMovies = await axios
    .get(`${URI}search/movie?api_key=${API_KEY}&query=${queue}`)
    .then(res => {
      return res.data.results;
    });

  return searchMovies;
}
