import { NavItem } from './AppBar.styled';
import { Box } from '../Box';
import { navItems } from './NavItems';

const AppBar = () => {
  return (
    <Box as="header" p={3} width="100vw" boxShadow="1px 1px 4px #000000">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => {
          return (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default AppBar;
