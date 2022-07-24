import propTypes from 'prop-types';

import { fetchMovieById } from '../../services/API-MovieDB';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import {
  AdditionalInfoTitle,
  FilmDetailItem,
  FilmGenresItem,
  FilmGenresList,
  FilmImage,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState();
  const location = useLocation();
  useEffect(() => {
    async function fetchMovieData() {
      try {
        await fetchMovieById(Number(id)).then(setFilmDetails);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieData();
  }, [id]);
  if (filmDetails === undefined) {
    return;
  }

  const backLinkHref = location.state?.from ?? '/';
  if (filmDetails === null) {
    return (
      <>
        <h2>Oops something going wrong, try later...</h2>
        <Link to={backLinkHref}>Back</Link>
      </>
    );
  }
  const { posterPath, original_title, vote_average, overview, genres } =
    filmDetails;

  return (
    <>
      <Box as="main" p={3} display="flex" boxShadow="1px 1px 4px #000000">
        <Box as="div">
          <FilmDetailItem to={backLinkHref}>Back</FilmDetailItem>
          <FilmImage src={`${posterPath}`} alt="poster" />
        </Box>
        <Box
          as="div"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          ml={3}
          p={3}
        >
          <h3>{original_title}</h3>
          <p>
            Vote average: <span>{Math.floor(vote_average * 10)}%</span>
          </p>
          <p>
            Overview: <span>{overview}</span>
          </p>
          <FilmGenresList>
            Genres:
            {genres.map(item => {
              return <FilmGenresItem key={item.id}>{item.name}</FilmGenresItem>;
            })}
          </FilmGenresList>
        </Box>
      </Box>
      <Box
        as="div"
        display="flex"
        flexDirection="column"
        p={3}
        boxShadow="1px 1px 4px #000000"
        width="100vw"
      >
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <FilmDetailItem to="cast" state={{ from: backLinkHref }}>
          Cast
        </FilmDetailItem>
        <FilmDetailItem to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </FilmDetailItem>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
FilmDetails.propTypes = {
  id: propTypes.number,
  filmDetails: propTypes.array,
};

export default FilmDetails;
