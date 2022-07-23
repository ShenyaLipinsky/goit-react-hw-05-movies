import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '../../Box';
import { NavItem } from './Home.styled';
import { fetchMovies } from '../../services/API-MovieDB';

const Home = () => {
  const [hits, setHits] = useState([]);
  const [endpoint, setEndpoint] = useState('trending/all/week');
  // const [links, setLinks] = useState('');
  // const [queue, setQueue] = useState(null);

  const location = useLocation();
  //   useEffect(() => {
  //     setEndpoint('trending/all/week');
  //   }, []);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movies = await fetchMovies(endpoint);
        setHits(movies.results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieData();
    return;
  }, [endpoint]);

  const moreDetails = () => {
    setEndpoint('movie');
  };
  return (
    <Box as="main" gridTemplateRows="auto 1fr">
      <Box as="h2" p={3}>
        Trending today
      </Box>
      <Box as="ul" display="flex" flexDirection="column">
        {hits.map(({ id, original_title, name }) => {
          return (
            <li key={id}>
              <NavItem
                to={`movies/${id}`}
                state={{ from: location }}
                onClick={() => moreDetails()}
              >
                {original_title || name}
              </NavItem>
            </li>
          );
        })}
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Home;
