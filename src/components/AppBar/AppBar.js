import { NavItem } from './AppBar.styled';
import { Box } from '../Box';
import { navItems } from './NavItems';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <Box as="header" p={3} width="100vw" shadow="1px 1px 4px #000000">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => {
          return (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          );
        })}
      </Box>
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
    </Box>
  );
};

export default AppBar;
