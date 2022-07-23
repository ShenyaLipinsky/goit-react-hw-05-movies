import { fetchMovieById } from '../../services/API-MovieDB';
import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  //   NavLink,
  Outlet,
  //   useLocation,
  useParams,
} from 'react-router-dom';
import { Box } from 'components/Box';
// import { NavItem } from 'components/AppBar/AppBar.styled';

const FilmDetails = () => {
  const { id } = useParams();
  const [filmDetails, setfilmDetails] = useState(null);
  //   const location = useLocation();
  useEffect(() => {
    fetchMovieById(Number(id)).then(setfilmDetails);
  }, [id]);

  if (!filmDetails) {
    return null;
  }
  const { posterPath, original_title, vote_average, overview, genres } =
    filmDetails;

  //   const backLinkHref = location.state?.from ?? '/home';
  return (
    <Box as="main">
      <Link to="/">Back to homepage</Link>
      <img src={`${posterPath}`} alt="poster" />
      <h3>{original_title}</h3>
      <p>
        Vote average: <span>{Math.floor(vote_average * 10)}%</span>
      </p>
      <p>
        Overview: <span>{overview}</span>
      </p>
      <ul>
        Genres:
        {genres.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <Box as="div">
        <title>Additional information</title>
        <Link to="cast" data="data">
          Cast
        </Link>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default FilmDetails;
