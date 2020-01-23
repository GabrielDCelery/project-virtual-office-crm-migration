import styled from 'styled-components';
import config from '../../config';
import { ListItemText } from '@material-ui/core';

export const NavListItemText = styled(ListItemText)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

export default NavListItemText;
