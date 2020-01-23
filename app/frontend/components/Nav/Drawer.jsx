import styled from 'styled-components';
import config from '../../config';
import Color from 'color';
import { Drawer } from '@material-ui/core';

export const NavDrawer = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${config.styles.layout.navbar.width};
    background-color: ${config.styles.colors.navbar.background
      .default} !important;
    background: linear-gradient(
      180deg,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(0)
          .hex()}
        0%,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(1)
          .hex()}
        50%,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(0)
          .hex()}
        100%
    ) !important;
    border-right: 3px solid #000;
  }
`;

export default NavDrawer;
