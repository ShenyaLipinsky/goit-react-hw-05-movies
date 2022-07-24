import MovieList from 'components/MovieList/MovieLIst';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '../../Box';
import { fetchMovieById, fetchMovies } from '../../services/API-MovieDB';

const Home = () => {
  const [hits, setHits] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movies = await fetchMovies();
        setHits(movies.results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieData();
    return;
  }, []);

  return (
    <Box as="main" gridTemplateRows="auto 1fr" p={2}>
      <Box as="h2" p={3}>
        Trending today
      </Box>
      <MovieList data={hits} moreDetails={fetchMovieById} location={location} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;
