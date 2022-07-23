import { fetchCrew } from '../../services/API-MovieDB';
import { useState, useEffect } from 'react';
import {
  // Link, NavLink,
  // useLocation,
  useParams,
} from 'react-router-dom';
// import { Box } from 'components/Box';

const Cast = () => {
  const { id } = useParams();
  const [crewDetails, setCrewDetails] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    async function crewData() {
      await fetchCrew(Number(id)).then(setCrewDetails);
    }
    crewData();
  }, [id]);
  if (!crewDetails) {
    return null;
  }
  return (
    <ul>
      {crewDetails.map(({ name, job, profile_path, id }) => {
        return (
          <li key={id}>
            {profile_path === null ? (
              <p>No Image</p>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="actor"
              />
            )}

            <p>Name:{name}</p>
            <p>
              Character: <span>{job}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
