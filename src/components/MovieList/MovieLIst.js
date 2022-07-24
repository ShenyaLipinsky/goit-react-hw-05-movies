import propTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { Box } from '../Box';
import { NavItem } from './MovieList.styled';

const MovieList = ({ data, moreDetails, location }) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" p={3}>
      {data.map(({ id, original_title, name }) => {
        return (
          <NavItem key={id}>
            <NavLink
              to={location.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
              onClick={() => moreDetails(id)}
            >
              {original_title || name}
            </NavLink>
          </NavItem>
        );
      })}
    </Box>
  );
};
MovieList.propTypes = {
  moreDetails: propTypes.func.isRequired,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      original_title: propTypes.string,
      name: propTypes.string,
    })
  ),
};

export default MovieList;
