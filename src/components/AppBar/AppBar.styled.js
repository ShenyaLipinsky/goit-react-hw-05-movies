import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  min-width: 60px;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :last-child {
    margin-left: ${p => p.theme.space[3]}px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;
