import styled from 'styled-components';
import config from '../../config';
import { ListItemIcon } from '@material-ui/core';

export const NavListItemIcon = styled(ListItemIcon)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

export default NavListItemIcon;
