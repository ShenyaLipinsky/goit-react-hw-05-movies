import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: underline;

  &.active {
    color: ${p => p.theme.colors.secondaryText};
  }
`;
export const NavItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;

  :last-child {
    margin-bottom: 0;
  }
`;
