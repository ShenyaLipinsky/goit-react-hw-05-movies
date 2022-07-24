import propTypes from 'prop-types';

import { fetchCrew } from '../../services/API-MovieDB';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'theme-ui';
import { CastItem } from './FilmDetails.styled';
// import { crewDataPagination } from 'components/services/Pagination';

const Cast = () => {
  const { id } = useParams();
  const [crewDetails, setCrewDetails] = useState(null);

  useEffect(() => {
    async function crewData() {
      await fetchCrew(Number(id)).then(setCrewDetails);
      // .then(crewDataPagination(Number(id)));
    }
    crewData();
  }, [id]);

  if (!crewDetails) {
    return null;
  }
  return (
    <Box as="ul" p={2}>
      {crewDetails.map(({ name, job, profile_path, id }) => {
        return (
          <CastItem key={id}>
            {profile_path === null ? (
              // <img
              //   src="/src/components/Images/NoPhoto.jpg"
              //   alt="actor"
              //   width="160"
              // />
              <p>Have no Photo</p>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="actor"
                width="160"
              />
            )}

            <p>{name}</p>
            <p>{job}</p>
          </CastItem>
        );
      })}
    </Box>
  );
};
Cast.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  job: propTypes.string,
  profile_path: propTypes.string,
};

export default Cast;
