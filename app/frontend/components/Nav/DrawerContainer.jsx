import styled from 'styled-components';
import config from '~/config';

export const NavDrawerContainer = styled.nav`
  @media (min-width: 600px) {
    width: ${config.styles.layout.navbar.width};
    flex-shrink: 0;
  }
`;

export default NavDrawerContainer;
