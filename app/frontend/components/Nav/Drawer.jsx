import styled from 'styled-components';
import config from '~/config';
import Color from 'color';
import { Drawer } from '@material-ui/core';

export const NavDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: ${config.styles.layout.navbar.width};
    background-color: ${config.styles.colors.navbar.background
      .default} !important;
    background: ${config.styles.colors.navbar.background.default} !important;
    border-right: 3px solid #000;
  }
`;

export default NavDrawer;
