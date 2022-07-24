import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FilmDetailItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  max-width: 60px;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FilmImage = styled.img`
  max-width: 250px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const FilmGenresList = styled.ul`
  display: flex;
`;
export const FilmGenresItem = styled.li`
  margin-left: ${p => p.theme.space[3]}px;
`;
export const AdditionalInfoTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const CastItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const ReviewItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid black;
  p {
    margin-bottom: ${p => p.theme.space[3]}px;
    font-size: 16px;
  }
  span {
    font-weight: 700;
  }
`;
