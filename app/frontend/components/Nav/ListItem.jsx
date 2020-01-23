import styled from 'styled-components';
import config from '../../config';
import { ListItem } from '@material-ui/core';

import NavListItemIcon from './ListItemIcon';
import NavListItemText from './ListItemText';

export const NavListItem = styled(ListItem)`
  border-top: 1px solid ${config.styles.colors.navbar.border.default} !important;
  border-bottom: 1px solid ${config.styles.colors.navbar.border.default} !important;
  background-color: ${config.styles.colors.navbar.background
    .default} !important;
  transition: all 0.5s ease-in-out !important;
  &:hover,
  &.active {
    background-color: ${config.styles.colors.navbar.background
      .hover} !important;
    border-color: ${config.styles.colors.navbar.border.hover} !important;
  }
  ,
  &:hover ${NavListItemIcon}, &.active ${NavListItemIcon} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }
  ,
  &:hover ${NavListItemText}, &.active ${NavListItemText} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }
`;

export default NavListItem;
